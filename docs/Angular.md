# Instalação e configuração do Angular

## 1. Instalação

No terminal, execute o comando abaixo. 
* No Linux, o comando deverá ser precedido por `sudo`.

`npm install -g @angular-cli`

* Se você estiver utilizando Windows, deverá reiniciar o computador.

Verifique a versão instalada:

`ng --version`

A versão esperada do Angular CLI, em abril de 2019, é, pelo menos, **7.3.7**.

> No Windows (principalmente nos computadores dos laboratórios), muitas vezes, por falta de permissão, o comando `ng` não é adicionado ao *path*. Em consequência, ao tentar executar o comando `ng`, recebemos uma mensagem de que o comando não existe ou é desconhecido.
>
> Nesse caso, precisaremos criar um arquivo de nome **ng.bat**, dentro da pasta de trabalho (`ProgWeb` ou semelhante), com o seguinte conteúdo:
>
>> `%USERPROFILE%\AppData\Roaming\npm\bin\ng %1 %2 %3 %4 %5 %6 %7 %8 %9`
>
> Após criar e salvar o arquivo, o comando `ng --version` deve funcionar no terminal.

## 2. Configuração

Por padrão, o Angular CLI trabalha com o `npm` como gerenciador de dependências. Para fazê-lo utilizar o `yarn` para esse propósito, precisamos executar o comando a seguir.
* No Linux, o comando deverá ser precedido por `sudo`.

`ng config -g cli.packageManager yarn`



