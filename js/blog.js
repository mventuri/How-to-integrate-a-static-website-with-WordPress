const spinner = document.getElementById("spinner");

fetch('https://<BASE_URL>/wp-json/wp/v2/posts').then(function (response) {
	// The API call was successful!
	if (response.ok) {
        return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
    spinner.remove()
    for (let i = 0; i < 3; i++) {
      
        cardCreation = '<div class="col-md-4 mb-5">'
        cardCreation += '<div class="card h-100">'
        cardCreation += '<div class="card-body">'
        cardCreation += '<h2 id="test" class="card-title">' + data[i].title.rendered + '</h2>'
        cardCreation += '<p class="card-text">' + data[i].excerpt.rendered + '</p>'
        cardCreation += '</div>'
        cardCreation += '<div class="card-footer"><button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-' + data[i].id + '">Read More</button></div>'
        cardCreation += '</div>'
        cardCreation += '</div>'

        modalCreation = '<div class="modal fade" id="modal-' + data[i].id +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">'
        modalCreation += '<div class="modal-dialog" role="document">'
        modalCreation += '<div class="modal-content">'
        modalCreation += '<div class="modal-header">'
        modalCreation += '<h5 class="modal-title" id="exampleModalLongTitle">' + data[i].title.rendered + '</h5>'
        modalCreation += '</div>'
        modalCreation += '<div class="modal-body">' + data[i].content.rendered + '</div>'
        modalCreation += '<div class="modal-footer">'
        modalCreation += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
        modalCreation += '</div>'
        modalCreation += '</div>'
        modalCreation += '</div>'
        modalCreation += '</div>'
  
        document.querySelector("#wrapper").insertAdjacentHTML("beforeend",cardCreation)
        document.querySelector("#wrapper").insertAdjacentHTML("beforeend",modalCreation)
      }
}).catch(function (err) {
	// There was an error
    spinner.remove();
    errorMsg = '<div class="alert alert-danger" role="alert">'
    errorMsg += 'Sorry, we can\'t retrieve posts at the moment. Please visit www.ourblog.com'
    errorMsg += '</div>'

    document.querySelector("#wrapper").insertAdjacentHTML("beforeend",errorMsg)

	console.warn('Something went wrong.', err);
});







  
