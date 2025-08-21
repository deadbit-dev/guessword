import { NetMessage, NetIdMessages, NetMessages } from "./protocol";

declare global {
    const Network: ReturnType<typeof NetworkModule>;
}

export function register_network() {
    (window as any).Network = NetworkModule();
}


type CallbackEvent = (data: any) => void;
type CallbackEventType<T> = (data: T) => void;

function NetworkModule() {
    let ws: WebSocket | null = null;
    let is_connected: boolean = false;
    let client_id: string = '';
    let current_ping: number = 0;

    const message_listeners: { [k: string]: CallbackEvent[] } = {};

    function connect(hostname: string, port: number, on_connected?: () => void, on_disconnected?: () => void) {
        const path = `ws://${hostname}:${port}/ws`;
        ws = new WebSocket(path);

        ws.onopen = () => {
            is_connected = true;
            setInterval(ping, 1000); // NOTE: ping every 1 second
            on_connected?.();
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data) as NetMessage;
            process_message(message.id, message.data);
        };

        ws.onclose = () => {
            is_connected = false;
            on_disconnected?.();
        }
    }

    function ping() {
        if (!is_connected) return;
        send(NetIdMessages.PING, {
            client_time: Date.now()
        });
    }

    function get_current_ping() {
        return current_ping;
    }

    function process_message<T extends keyof NetMessages>(id_message: T, _message: NetMessages[T]) {
        switch (id_message) {
            case NetIdMessages.PONG:
                const pong_message = _message as NetMessages[NetIdMessages.PONG];
                on_pong(pong_message);
                break;
        }

        if (message_listeners[id_message]) {
            message_listeners[id_message].forEach(listener => listener(_message));
        }
    }

    function addMessageListener<T extends keyof NetMessages>(id_message: T, listener: CallbackEventType<NetMessages[T]>) {
        if (!message_listeners[id_message]) {
            message_listeners[id_message] = [];
        }
        message_listeners[id_message].push(listener);
    }

    function removeMessageListener<T extends keyof NetMessages>(id_message: T, listener: CallbackEventType<NetMessages[T]>) {
        if (!message_listeners[id_message]) return;
        message_listeners[id_message] = message_listeners[id_message].filter(l => l !== listener);
    }

    function on_pong(message: NetMessages[NetIdMessages.PONG]) {
        const { client_time, server_time } = message;
        const latency = server_time - client_time;
        current_ping = latency;
    }

    function send<T extends keyof NetMessages>(id_message: T, _message: NetMessages[T]) {
        if (!is_connected) return;
        ws?.send(JSON.stringify({
            id: id_message,
            data: _message
        }));
    }

    function broadcast(data: object) {
        if (!is_connected) return;
        send(NetIdMessages.BROADCAST, {
            client_id,
            data
        });
    }

    return {
        connect,
        get_current_ping,
        send,
        broadcast,
        addMessageListener,
        removeMessageListener
    }
}