"use strict";
import {getData} from "./ajax-store-utils.js";






(async ()=>{



    const myData = await getData();
    console.log(myData);

    let myHtml = "";
    for (let i = 0; i < myData.length; i += 1){
        myHtml += `
            <article>
                <h3>Order # ${myData[i].orderNumber}</h3>
                <dl>
                  <dt>Item Ordered</dt>
                  <dd>${myData[i].itemOrdered}</dd>
                  <dt>Ordered by</dt>
                  <dd>${myData[i].orderedBy}</dd>
                </dl>
          </article>
        `;
    }

    console.log(myHtml);

    let myDisplayDiv = document.getElementById("orders")
    let myButton = document.getElementById("update");
    myButton.addEventListener("click", ()=>{
        myDisplayDiv.innerHTML=(myHtml)
    })

    // $("#update").on("click", (e)=>{
    //     e.preventDefault()
    //     $("#orders").innerHTML(myHtml)
    // })






    // $(document).ready(function () {
    //     //1. make a request for the data (orders.json)
    //     // 2. loop through the data and build an HTML string to create the HTML to display the data
    //     function displayData () {
    //         $.get("./data/orders.json").done(function(data){
    //             console.log(data);
    //             let myHtml = "";
    //             for (let i = 0; i < data.length; i += 1){
    //                 myHtml += `<article>
    //                             <h3>Order # ${data[i].orderNumber}</h3>
    //                             <dl>
    //                               <dt>Item Ordered</dt>
    //                               <dd>${data[i].itemOrdered}</dd>
    //                               <dt>Ordered by</dt>
    //                               <dd>${data[i].orderedBy}</dd>
    //                             </dl>
    //                           </article>`
    //             }
    //             $("#orders").html(myHtml);
    //         }).fail((jqXhr, status, error)=>{
    //             console.log(error);
    //             console.log("something went wrong");
    //         });
    //     }
    //     // 3. update the DOM with the new HTML
    //     // setInterval(displayData,1000)
    //     $("#update").on("click", displayData);
    //
    // })




    const renderTableRow = (tool, target) => {
        const tableRow = document.createElement("tr");
        tableRow.poop = "poopy";
        tableRow.innerHTML = `
      <td class="border-end border-black">${tool.title}</td>
      <td class="border-end border-black">${tool.quantity}</td>
      <td class="border-end border-black">${tool.price}</td>
      <td class="border-end border-black">${tool.categories}</td>
      <td class="border-end border-black"><button>delete</button></td>
    `;
        const deleteBtn = tableRow.querySelector("button");
        deleteBtn.addEventListener("click", () => {
            tableRow.remove();
        });
        target.appendChild(tableRow);
    };





})();