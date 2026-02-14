// settings

// showing the sections
function show(id) {
  const sections = ['cloak','browsing','appear','ext','misc'];
  
  sections.forEach(s => {
    document.getElementById(s).style.display = (s === id) ? 'block' : 'none';
  });
}

// secret theme
let t = "";
if (localStorage.getItem("theme")) 
    document.body.setAttribute("theme", localStorage.getItem("theme"));

onkeydown = e => {
    if (document.activeElement.tagName !== "INPUT") {
        t += e.key.toLowerCase();
        if (t.endsWith("femlover")) {
            alert('you found an easter egg! creep')
            document.body.setAttribute("theme", "eww");
            localStorage.setItem("theme", "eww");
            t = "";
            location.reload();
        }
        if (t.endsWith("revert")) {
            document.body.setAttribute("theme", "default");
            localStorage.setItem("theme", "default");
            t = "";
            location.reload();
        }
        if (t.length > 20) t = t.slice(-20);
    }
};