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
> `%USERPROFILE%\AppData\Roaming\npm\bin\ng %1 %2 %3 %4 %5 %6 %7 %8 %9`
>
> Após criar e salvar o arquivo, o comando `ng --version` deve funcionar no terminal.

## 2. Configuração

Por padrão, o Angular CLI trabalha com o `npm` como gerenciador de dependências. Para fazê-lo utilizar o `yarn` para esse propósito, precisamos executar o comando a seguir.
* No Linux, o comando deverá ser precedido por `sudo`.

`ng config -g cli.packageManager yarn`

## 3. Criação do projeto Angular

O comando `ng` é uma caixa de ferramentas que nos ajuda a trabalhar com o Angular. Uma de suas capacidades é a criação do projeto. Para a criação do projeto chamado **front-end**, devemos executar, no terminal, o comando a seguir.

`ng new front-end`

Esse comando fará algumas perguntas. Responda conforme o modelo a seguir.
* `? Would you like to add Angular routing? (y/N)` Responda **Y**.
* `? Which stylesheet format would you like to use? (Use arrow keys)` Usando as setas, selecione **SCSS**.

Respondidas as perguntas, o comando irá criar os arquivos dos projeto e instalar suas respectivas dependências. **Isso pode demorar um pouco, dependendo da sua conexão com a Internet**.

## 4. Trabalhando no projeto Angular

O comando anterior terá criado uma pasta chamada **front-end**, com vários arquivos dentro dela. Portanto, de agora em diante, para trabalharmos como esse projeto, precisaremos entrar dentro dessa pasta. No terminal:

`cd front-end`

> Se você precisou criar o arquivo **ng.bat** no passo nº 1, mova agora esse arquivo para dentro da pasta **front-end**.

O comando `ng new`, que executamos no passo anterior, gera um projeto angular funcional. Para vê-lo, execute o seguinte comando no terminal:

`ng serve`

Esse comando irá compilar o projeto (demora um pouco na primeira execução). Ao final, abra seu navegador no endereço [http://localhost:4200](http://localhost:4200). Você verá a página padrão do projeto com o logotipo do Angular. 



