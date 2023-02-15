
const resize = {
    observe: function(cb: () => void) {
        if(typeof window != "undefined") {
            window.addEventListener("resize", cb)
        }
    },
    
    unobserve: function(ref: () => void) {
        if(typeof window != "undefined") {
            window.removeEventListener("resize", ref)
        }
    }
}



export default resize;