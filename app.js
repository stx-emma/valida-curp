async function completarNombre() {
    const curpInput = document.getElementById("curp").value.trim().toUpperCase();
    const loader = document.getElementById("loader");

    if (curpInput.length !== 18) return;
    
    loader.style.display = "flex"; // Mostrar la animación de carga
    
    const url = `https://curp-renapo-mexico.p.rapidapi.com/api/v1/curp/${curpInput}`;
    
    const options = {
        method: "POST",
        headers: {
            "X-RapidAPI-Key": "726397bf9bmsh26c34606d481c39p110cc2jsn56e39035d34e",
            "X-RapidAPI-Host": "curp-renapo-mexico.p.rapidapi.com",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ key1: "value", key2: "value" })
    };
    
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        
        document.getElementById("nombre").value = data.data?.nombres || "";
        document.getElementById("apellidoP").value = data.data?.primerApellido || "";
        document.getElementById("apellidoM").value = data.data?.segundoApellido || "";
        
    } catch (error) {
        console.error("Error en la solicitud:", error);
    } finally {
        loader.style.display = "none"; // Ocultar la animación de carga
    }
}