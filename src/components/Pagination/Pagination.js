import "./Pagination.css";

export default function Pagination(props) {
  const { pagination, loading, handlePage, selectedPage } = props;

  function turnPage(e) {
    console.log(e.target.id);
    if (e.target.id < 1) return;
    if (e.target.id > pagination.total_pages) return;
    handlePage(e.target.id);
  }

  function makeButtons() {
    const buttons = [];
    if (pagination.total_pages > 10) {
      for (let i = 1; i <= 3; i += 1) {
        const button = (
          <button
            className={
              selectedPage === i
                ? "Pagination-page Pagination-selected"
                : "Pagination-page"
            }
            key={i}
            id={i}
            onClick={turnPage}
          >
            {i}
          </button>
        );
        buttons.push(button);
      }
      buttons.push("...");
      for (
        let j = pagination.total_pages - 2;
        j <= pagination.total_pages;
        j += 1
      ) {
        const button = (
          <button
            className={
              selectedPage === j
                ? "Pagination-page Pagination-selected"
                : "Pagination-page"
            }
            key={j}
            id={j}
            onClick={turnPage}
          >
            {j}
          </button>
        );
        buttons.push(button);
      }
    } else {
      for (let i = 1; i <= pagination.total_pages; i += 1) {
        const button = (
          <button
            className={
              selectedPage === i
                ? "Pagination-page Pagination-selected"
                : "Pagination-page"
            }
            key={i}
            id={i}
            onClick={turnPage}
          >
            {i}
          </button>
        );
        buttons.push(button);
      }
    }
    return buttons;
  }

  return (
    <div className="Pagination">
      <button
        className="Pagination-prev Pagination-page"
        disabled={selectedPage === 1 && true}
        id={selectedPage - 1}
        onClick={turnPage}
      >
        <div className="Pagination-arrow-left"></div>
        previous
      </button>
      {!loading && <div className="Pagination-pages">{makeButtons()}</div>}
      <button
        className="Pagination-next Pagination-page"
        id={selectedPage + 1}
        onClick={turnPage}
        disabled={pagination && selectedPage === pagination.total_pages && true}
      >
        next
        <div className="Pagination-arrow-right"></div>
      </button>
    </div>
  );
}
