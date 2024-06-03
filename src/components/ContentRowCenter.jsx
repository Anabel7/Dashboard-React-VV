import React from "react";
import { LastProductInDb } from "./LastProductInDb";
import { CategoriesInDB} from "./CategoriesInDB";

export function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Product in DB -->*/}
      <LastProductInDb />

      {/*<!-- Genres in DB -->*/}
      <CategoriesInDB />
    </div>
  );
}
