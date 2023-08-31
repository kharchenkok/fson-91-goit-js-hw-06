const list = document.getElementById('categories')
const items= list.querySelectorAll('.item')

items.forEach(item=>{
    const titleText = item.querySelector('h2').textContent
    const itemList = item.querySelectorAll('ul > li')
    console.log(`
    Category:${titleText}
    Elements:${itemList.length}
    `)
   })
