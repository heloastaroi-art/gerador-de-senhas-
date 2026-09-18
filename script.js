function gerarSenha(tamanho = 16) {
    const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*()_+-=[]{}|;:,.<>?";

    const valores = new Uint32Array(tamanho);
    crypto.getRandomValues(valores);

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        senha += caracteres[valores[i] % caracteres.length];
    }

    return senha;
}

console.log(gerarSenha(20));