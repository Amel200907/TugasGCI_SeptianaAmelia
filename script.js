const items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'Image/Logitek.jpeg'],
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'Image/MSI.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'Image/genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'Image/Jerry.jpg']
];

function displayItems(data) {
    const listBarang = document.getElementById('listBarang');
    listBarang.innerHTML = '';
    data.forEach(item => {
        const card = `
            <div class="col-4 mt-2">
                <div class="card" style="width: 18rem;">
                    <img src="${item[4]}" class="card-img-top" height="200px" alt="${item[1]}">
                    <div class="card-body">
                        <h5 class="card-title">${item[1]}</h5>
                        <p class="card-text">${item[3]}</p>
                        <p class="card-text">Rp ${item[2].toLocaleString()}</p>
                        <a href="#" class="btn btn-primary add-cart">Tambahkan ke keranjang</a>
                    </div>
                </div>
            </div>`;
        listBarang.innerHTML += card;
    });
}

document.getElementById('formItem').addEventListener('submit', function (event) {
    event.preventDefault();
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const filteredItems = items.filter(item => item[1].toLowerCase().includes(keyword));
    displayItems(filteredItems);
});

let cartCount = 0;
document.getElementById('listBarang').addEventListener('click', function (event) {
    if (event.target.classList.contains('add-cart')) {
        cartCount++;
        document.getElementById('cart').innerHTML = `<i class="fas fa-shopping-cart"></i>(${cartCount})`;
    }
});

displayItems(items);
