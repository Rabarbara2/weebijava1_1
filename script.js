(function() {
  document.getElementById("ex1_button").addEventListener("click", function() {
    document.getElementById("ex1_content").innerHTML = "0,1,2,3,4,5,6,7,8,9";
  });

  const input = document.getElementById("ex2_text");
  input.addEventListener("input", function() {
    const value = input.value;
    if (value.length !== 9) {
      document.getElementById("ex2_content").textContent = "Dugość numeru musi być równa 9";
    }
    else if (/[a-zA-Z]/.test(value)) {
      document.getElementById("ex2_content").textContent = "Numer nie może zawierać liter";
    }
    else if (/[^0-9]/.test(value)) {
      document.getElementById("ex2_content").textContent = "Numer nie może zawierać znaków specjalnych";
    }
    else {
      document.getElementById("ex2_content").textContent = "Numer jest poprawny";
    }

  });

  const element = document.getElementById("ex3_element");
  const container1 = document.getElementById("ex3_one");
  const container2 = document.getElementById("ex3_two");
  element.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
  function allowDrop(e) {
    e.preventDefault();
  }
  function dropHandler(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const draggedelement = document.getElementById(id);
    e.target.appendChild(draggedelement);
  }

  [container1, container2].forEach(container => {
    container.addEventListener("dragover", allowDrop);
    container.addEventListener("drop", dropHandler)
  })

})();