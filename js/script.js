window.onload = function() {
    const wrongHeader = document.querySelector("h1");
    wrongHeader.remove();

    const body = document.querySelector("body");
    const firstH1 = document.createElement("H1");
    firstH1.append('Webpage Recreation Practice');
    const paragraph = document.createElement("p");
    paragraph.append("The HTML of this webpage was created with JavaScript.");
    const img = document.createElement("img");
    img.src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900" ;
    img.alt="This is an image of a Multicolored Tanager bird from birdsoftheworld.org" ; 
    const secondH1 = document.createElement("h1");
    secondH1.append("Facts about the Multicolored Tanager");
    const ul = document.createElement("ul");
    const liOne = document.createElement("li");
    liOne.append("It is endemic to the mountains of Colombia.")
    const liTwo = document.createElement("li");
    liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.")
    const h2 = document.createElement("h2");
    h2.append("Source");
    const a = document.createElement("a");
    a.append ("Wikipedia");
    a.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
    

    
    

    body.append(firstH1);
    body.append(paragraph);
    body.append(img);
    body.append(ul);
    ul.append(liOne);
    ul.append(liTwo);
    body.append(a);



}
