const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let trades = ["","Roofing","Electrician", "HVAC", "Kitchen Tiles", "Landscaping", "Accountant", "Developer", "Enginner", "Lawyer", "Notary"];


                 // all trades by alphabetical order
                 // 

function addTrade(selectedTrade) {
    options.innerHTML = "";
    trades.forEach(trade => {
        let isSelected = trade == selectedTrade ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${trade}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}


//change "country" to trade
//when <li class="selected" make it going to that page, or have that page pop up?

addTrade();

function updateName(selectedLi) {
    searchInp.value = "";
    addTrade(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
    document.getElementsByClassName("form-control")[0].value=selectedLi.innerText;
    document.getElementsByClassName("form-control")[0].dispatchEvent(new Event("input"));

}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = trades.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Trade not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));