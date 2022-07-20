function FilterChatSvg() {
  return (
    <>
      <span data-testid="filter" data-icon="filter" className="filter_svg">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          preserveAspectRatio="xMidYMid meet"
          className=""
        >
          <path
            fill="currentColor"
            d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"
          ></path>
        </svg>
      </span>
    </>
  );
}

export default FilterChatSvg;
