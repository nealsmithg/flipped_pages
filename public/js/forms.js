const init = async () => {
  const bookTitles = {};
  const response = await fetch("/api/books");
  const data = await response.json();
  data.forEach(async (book) => {
    bookTitles[book.name] = null;
  });

  // Autocomplete
  const ac = document.querySelector(".autocomplete");
  M.Autocomplete.init(ac, {
    data: bookTitles,
  });
};

const newBookHandler = async (event) => {
  event.preventDefault();

  const bookTitle = document.querySelector("#book-title").value.trim();
  const read = document.getElementById("read").checked;
  const owned = document.getElementById("owned").checked;
  const want = document.getElementById("want").checked;
  const heardAbout = document.querySelector("#heard-about").value;

  if (bookTitle) {
    const response = await fetch("/api/books");
    const data = await response.json();
    data.forEach(async (book) => {
      if (bookTitle == book.name) {
        const postResponse = await fetch("/api/userBooks/", {
          method: "post",
          body: JSON.stringify({
            books_id: book.id,
            read: read,
            own: owned,
            want: want,
            heard_about: heardAbout,
          }),
          headers: { "content-type": "application/json" },
        });
        if (postResponse.ok) {
          document.location.replace("/");
        } else {
          aleart("Unable to add book");
        }
      }
    });
    alert("Please enter a book in our database.");
  }
};

document
  .querySelector(".new-book-form")
  .addEventListener("submit", newBookHandler);

init();
