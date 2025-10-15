const DEFAULT_SECONDS = 30; 

//Read delay seconds from localStorage (simple, no extra permissions)
function getDelaySeconds() { 
    const s = Number(localStorage.getItem("__ig_delay_seconds__")); 
    return Number.isFinite(s) && s > 0 ? s : DEFAULT_SECONDS;
}

(function main() { 
    //Only run on the top page (avoid iframes)
    if (window.top !== window) return; 

    const seconds = getDelaySeconds(); 

    // Make sure nothing flashes before overlay (in case CSS hasn't loaded yet)
    //document.documentElement.style.opacity = "0";

    // Build overlay
    const overlay = document.createElement("div"); 
    overlay.id = "ig-delay-overlay"; 
    overlay.innerHTML = `
        <div id ="ig-delay-card" role="dialog" aria-modal="true" aria-label="Instagram delay"> 
            <h2>Hold up </h2>
            <p>You are better than this</p>
            <div id="ig-delay-count">${seconds}</div>
            <div id="ig-delay-buttons">
                <button id="ig-delay-skip" title="Skip Button">Open Instagram (because you are a coward and an addict)</button>
                <button id="ig-delay-close" title="Close Button">Close Instagram (you are better than everyone if you do this)</button>
            </div>
        </div>
    `; 
    document.documentElement.appendChild(overlay); 
    console.log("[Instagram Delay] Overlay inserted");
    // Countdown (might take out cuase it makes it seem chill)
    let remaining = seconds; 
    //const counter = overlay.querySelector("#ig-delay-count"); 

    const interval = setInterval(() => {
        remaining -= 1;

        // Re-query each tick; don't rely on a possibly-null captured ref
        const c = document.getElementById("ig-delay-count");
        if (c) c.textContent = String(remaining);

        if (remaining <= 0) {
            clearInterval(interval);
            revealPage();
        }
    }, 1000);




    // Buttons
    overlay.querySelector("#ig-delay-skip").addEventListener("click", () => { 
        clearInterval(interval); 
        revealPage(); 
    }); 

    overlay.querySelector("#ig-delay-close").addEventListener("click", () => { 
    clearInterval(interval); 
    window.close(); 
    setTimeout(() => { location.href = "about:blank"; }, 50);
    }); 


    function revealPage() { 
        overlay.remove(); 
        document.documentElement.style.opacity = "1"; 
    }

    //Safety fallback
    setTimeout(revealPage, (seconds + 5) * 1000);

})();