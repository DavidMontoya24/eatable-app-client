import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import DishCard from "../components/DishCard";
import Input from "../components/Input";
import { useProducts } from "../context/products-context";
import { RiSearchLine } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { colors, typography } from "../styles";
import { capitalizeStr, debounce, makeUniqueArr } from "../utils";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledProductPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  align-items: center;
  padding-top: 50px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  justify-content: center;
  height: 680px;
  /* overflow: scroll; */
  z-index: 100;
  overflow-y: auto;
  padding-top: 60px;
`;

const StyledBackArrow = styled(FaChevronLeft)`
  height: 1.5rem;
  cursor: pointer;
  color: ${colors.black};
`;

const CategoryBar = styled.div`
  display: flex;
  width: 70%;
  gap: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledCtgryText = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const CtgryText = styled.div`
  ${typography.regular.s}
  color: ${colors.gray};
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    color: ${colors.orange};
  }
  &.activeCtgry {
    color: ${colors.orange};
  }
`;
const NotFoundContainer = styled.div`
  text-align: center;
`;

const ActiveLine = styled.div`
  width: 100%;
  margin-right: 50px;
  height: 3px;
  &.activeLine {
    background-color: ${colors.orange};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function ProductsPage() {
  const { products, searchProducts, selectedProducts } = useProducts();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(products);

  function getCatgryNames() {
    let allProductCtgry = [];
    for (const dish of products) {
      allProductCtgry.push(dish.category);
    }
    return (allProductCtgry = makeUniqueArr(allProductCtgry));
  }

  const searchMemoized = useCallback(
    debounce((query) => {
      console.log(query);
      const newResults = searchProducts(query);
      setResults(newResults);
    }, 2000),
    [searchProducts]
  );

  useEffect(() => {
    setResults(products);
  }, [products]);

  function handleChange(e) {
    const newQuery = e.target.value;
    setQuery(newQuery);
    searchMemoized(newQuery);
  }

  function handelSortByClick(e) {
    // CategryTxt Active
    const valueFirstChild = e.target
      .closest(".ctgryGroup")
      .firstChild.getAttribute("value");
    const value = e.target.getAttribute("value") || valueFirstChild;
    let sortedResults = products.filter((dish) => dish.category === value);
    if (value === "All") {
      sortedResults = products;
    }
    const anyActiveTxt = document.querySelector(".activeCtgry");
    if (e.target !== anyActiveTxt) {
      anyActiveTxt.classList.remove("activeCtgry");
      e.target.classList.add("activeCtgry");
    }
    // CategryLine Active
    const ctgryGroup = e.target.closest(".ctgryGroup");
    const ctgryLine = ctgryGroup.querySelector(".ctgryLine");
    const anyActiveLine = document.querySelector(".activeLine");
    if (ctgryLine !== anyActiveLine) {
      anyActiveLine.classList.remove("activeLine");
      ctgryLine.classList.add("activeLine");
    }
    setResults(sortedResults);
  }

  function resetQuery() {
    setQuery("");
    setResults(products);
  }

  return (
    <StyledProductPage>
      <Input
        name="query"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        baseLine={false}
        iconLeft={
          !query ? (
            <RiSearchLine size="2.5rem" />
          ) : (
            <StyledBackArrow onClick={resetQuery} />
          )
        }
        iconRight={
          <Link to="/cart">
            <CgShoppingCart
              size="2rem"
              style={
                selectedProducts.length !== 0
                  ? { color: `${colors.black}` }
                  : { color: `${colors.gray}` }
              }
            />
          </Link>
        }
      ></Input>
      <CategoryBar>
        <StyledCtgryText onClick={handelSortByClick} className="ctgryGroup">
          <CtgryText value="All" className="activeCtgry">
            All
          </CtgryText>
          <ActiveLine className="activeLine ctgryLine" value="All" id="all" />
        </StyledCtgryText>
        {getCatgryNames().map((e) => (
          <StyledCtgryText
            key={e}
            onClick={handelSortByClick}
            className="ctgryGroup"
          >
            <CtgryText value={e}>{capitalizeStr(e)}</CtgryText>
            <ActiveLine className="ctgryLine" value={e} id={e} />
          </StyledCtgryText>
        ))}
      </CategoryBar>
      <StyledContainer>
        {results.length !== 0 ? (
          results.map((r) => {
            const { id, ...data } = r;
            return (
              <StyledLink to={`/products/${id}`} key={id}>
                <DishCard {...data} />
              </StyledLink>
            );
          })
        ) : (
          <NotFoundContainer>
            <RiSearchLine size="8rem" style={{ color: "#C7C7C7" }} />
            <p>No products found</p>
          </NotFoundContainer>
        )}
      </StyledContainer>
    </StyledProductPage>
  );
}
