import { range } from "../../__tests__/range";

export function Message({ message = "Something went wrong" }) {
  return <h1 data-testid="message-container">{message}</h1>;
}

export function Pagination({ total, limit, currentPage, selectPage }) {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          data-testid="page-container"
          key={page}
          onClick={() => selectPage(page)}
          className={`page-item ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </li>
      ))}
    </ul>
  );
}
