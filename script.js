document.querySelector('.rental-form').addEventListener
('submit', function(event){
    event.preventDefault();
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const city = document.getElementById('city').value;
    const category = document.getElementById('category').value;

    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('City:', city);
    console.log('Category:', category);
});
