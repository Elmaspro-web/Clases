
export class DomManager
{
    loginDom()
    {
        const formularioLogin = document.createElement("section");
        formularioLogin.innerHTML = `
            
            <h1>Login</h1>

            <form>
                <label for="usuario">Usuario:</label>
                <input type="text" required id="usuario" name="usuario" autocomplete="username">
                
                <label for="contrasena">Contraseña</label>
                <input type="password" id="contrasena" name="contrasena">
                
                <input type="submit" id="botonLogin" value="Login">
            </form>
        `;
        document.body.appendChild(formularioLogin);
    }

    registerDom()
    {
        const formularioRegister = document.createElement("section");
        formularioRegister.innerHTML = `

            <h1>Registrarse</h1>
            
            <form>
                <label for="usuario">Usuario:</label>
                <input type="text" required id="usuario" name="usuario" autocomplete="username">
                
                <label for="contrasena">Contraseña</label>
                <input type="password" id="contrasena" name="contrasena">
                
                <input type="submit" id="botonRegistrarse" value="Registro">
            </form>
        `;
        document.body.appendChild(formularioRegister);
    }

    gameDom()
    {
        console.log("mi abuela")
    }
}