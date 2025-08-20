export enum Alphabet {
    A = 'a',
    B = 'b',
    C = 'c',
    D = 'd',
    E = 'e',
    F = 'f',
    G = 'g',
    H = 'h',
    I = 'i',
    J = 'j',
    K = 'k',
    L = 'l',
    M = 'm',
    N = 'n',
    O = 'o',
    P = 'p',
    Q = 'q',
    R = 'r',
    S = 's',
    T = 't',
    U = 'u',
    V = 'v',
    W = 'w',
    X = 'x',
    Y = 'y',
    Z = 'z',
}


export const SYSTEM_CONFIG = {
    hostname: "84.252.140.225",
    port: 3000,

    keyboard: [
        [Alphabet.Q, Alphabet.W, Alphabet.E, Alphabet.R, Alphabet.T, Alphabet.Y, Alphabet.U, Alphabet.I, Alphabet.O, Alphabet.P],
        [Alphabet.A, Alphabet.S, Alphabet.D, Alphabet.F, Alphabet.G, Alphabet.H, Alphabet.J, Alphabet.K, Alphabet.L],
        [Alphabet.Z, Alphabet.X, Alphabet.C, Alphabet.V, Alphabet.B, Alphabet.N, Alphabet.M],
    ]
}