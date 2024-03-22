import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selector";
import { filterContact } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const filterId = useId();
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  return (
    <div className={css.form}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        value={filterName}
        onChange={(evt) => dispatch(filterContact(evt.target.value))}
        id={filterId}
        className={css.filterInput}
      />
    </div>
  );
};
