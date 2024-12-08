import Link from "next/link";
import React from "react";
import { MAX_ITEMS } from "../global/const";
import { useSearchParams } from "next/navigation";
import { ChevronRightIcon } from "../assets/chevronRight.icon";
import { ChevronLeftIcon } from "../assets/chevronLeftIcon";

const generatePaginationItems = (totalPages: number, currentPage: number) => {
  const paginationItems: (number | string)[] = [];

  if (totalPages <= MAX_ITEMS) {
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(i);
    }
  } else {
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) {
      startPage = 2;
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages - 1;
    }

    paginationItems.push(1);
    if (startPage > 2) {
      paginationItems.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(i);
    }

    if (endPage < totalPages - 1) {
      paginationItems.push("...");
    }
    paginationItems.push(totalPages);
  }

  return paginationItems;
};

type Props = {
  count: number;
};

export const Pagination: React.FC<Props> = ({ count }) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const paginationItems = generatePaginationItems(
    Math.ceil(count / MAX_ITEMS),
    page
  );

  return (
    <div className="pagination">
      <Link
        className={`pagination_item pagination_nav ${
          page === 1 ? "pagination_disabled" : ""
        }`}
        href={`/pokemons?page=${page - 1}`}
      >
        <ChevronLeftIcon transform="scale(0.6)" />
        Anterior
      </Link>

      <div className="pagination_mobile pagination_item pagination_item_active">
        <span>{page}</span>
      </div>

      {paginationItems.map((item, index) =>
        item === "..." ? (
          <div
            className="pagination_item pagination_item_ellipsis"
            key={`${item}-${index}`}
          >
            <span>...</span>
          </div>
        ) : (
          <Link
            key={item}
            className={`pagination_item ${
              page === Number(item) ? "pagination_item_active" : ""
            }`}
            href={`/pokemons?page=${item}`}
          >
            {item}
          </Link>
        )
      )}
      <Link
        className={`pagination_item pagination_nav ${
          page === Math.ceil(count / MAX_ITEMS) ? "pagination_disabled" : ""
        }`}
        href={`/pokemons?page=${page + 1}`}
      >
        Siguiente
        <ChevronRightIcon transform="scale(0.6)" />
      </Link>
    </div>
  );
};
