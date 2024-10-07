import { useState } from "react";
import producttab1 from "../bakers-inn-resourses/Rectangle 345.png";
import producttab2 from "../bakers-inn-resourses/Rectangle 7.png";
import producttab3 from "../bakers-inn-resourses/Rectangle 8.png";


const ProductsBread = () => {
  const [breadCards] = useState([
    {
      breadImage: producttab1,
      breadTitle: "Family Loaf High Energy Brown",
      breadSecTitle: `Our Premium Soft White loaves are delightfully soft, fresh, and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.`,
      id: 1,
    },
    {
      breadImage: producttab2,
      breadTitle: "Family Loaf High Energy Brown",
      breadSecTitle: `Our Family Loaf High Energy Brown loaves are a great source of fibre, high in energy, and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs—anything! The Family Loaf has 21 slices.`,
      id: 2,
    },
    {
      breadImage: producttab3,
      breadTitle: "Family Loaf Soft White",
      breadSecTitle: `Our Family Loaf Soft White loaves are delightfully soft, fresh, and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Family Loaf has 21 slices.`,
      id: 3,
    },
    {
      breadImage: producttab1,
      breadTitle: "Premium Low Gi Seed-Loaf",
      breadSecTitle: `Premium Low Gi Seed-Loaf. The Standard Loaf has 18 slices.`,
      id: 4,
    },
    {
      breadImage: producttab2,
      breadTitle: "Premium High Energy Brown Loaf",
      breadSecTitle: `Our Premium High Energy Brown loaves are a great source of fibre, high in energy, and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs—anything! The Standard Loaf has 18 slices.`,
      id: 5,
    },
    {
      breadImage: producttab3,
      breadTitle: "Premium Whole Grain Loaf",
      breadSecTitle: `Our Premium Whole Grain loaves are packed with nutrients including protein, fibre, B vitamins, antioxidants, and trace minerals. A diet with whole grain has been shown to reduce the risk of heart disease and diabetes. The Standard Loaf has 18 slices.`,
      id: 6,
    },
  ]);

  return (
    <section>
      <div className="container-fluid outerBread">
        <div className="d-flex innerBread">
          {breadCards.map((bread) => (
            <div
              key={bread.id}
              className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"
            >
              <div className="card">
                <img
                  src={bread.breadImage}
                  alt={bread.breadTitle}
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">{bread.breadTitle}</h5>
                  <p className="card-text mt-3">{bread.breadSecTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsBread;
