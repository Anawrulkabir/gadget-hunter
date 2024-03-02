const loadPhone = async (searchText) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  )
  const data = await response.json()
  const phones = data.data
  displayPhones(phones)
}

const displayPhones = (phones) => {
  // Step-1 : get the requried container using getElementById

  const phoneContainer = document.getElementById('phone-container')
  phoneContainer.textContent = ''

  // display show all btn if there are more than 9 phones
  const showAllBtn = document.getElementById('show-all-btn')
  if (phones.length > 9) {
    showAllBtn.classList.remove('hidden')
  } else {
    showAllBtn.classList.add('hidden')
  }

  //   minimizing phones item to 9
  phones = phones.slice(0, 9)

  phones.forEach((phone) => {
    // Step-2 : create a new div

    const phoneCard = document.createElement('div')

    // Step-3 : set classList and innerHTML

    phoneCard.classList = `card  bg-base-100 shadow-2xl p-4`
    phoneCard.innerHTML = `
    <!-- card start -->
        <figure>
            <img src="${phone.image}" />
        </figure>
        <div class="card-body">
            <h2 class="card-title text-center">${phone.phone_name}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <h2 class="card-title text-center">$999</h2>
            <div class="card-actions justify-center ">
                <button class="btn btn-primary w-full">Buy Now</button>
            </div>
        </div>
    <!-- card end -->   
    `

    // Step-4 : append the element in the comtainer using appendChild

    phoneContainer.appendChild(phoneCard)
  })

  const loadingSpinner = document.getElementById('loading-spinner')
  loadingSpinner.classList.add('hidden')
}
// loadPhone()

const productSearchBtn = () => {
  toggleSpinner()
  const productSearchField = document.getElementById('product-search-field')
  const productSearchFieldText = productSearchField.value
  inputText = productSearchFieldText
  console.log(productSearchFieldText)
  loadPhone(inputText)
}

const toggleSpinner = () => {
  const loadingSpinner = document.getElementById('loading-spinner')
  loadingSpinner.classList.remove('hidden')
}
