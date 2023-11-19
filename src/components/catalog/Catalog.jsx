import "./catalog.scss"

const Catalog = (props) => {
    const buttonsData = [
        { name: 'pizza', label: 'Пицца' },
        { name: 'sushi', label: 'Суши' },
        { name: 'burger', label: 'Бургеры' },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.category === name;
        const clazz = active ? 'active' : '';
        return (
          <button
            type="button"
            className={`${clazz}`}
            key={name}
            onClick={() => props.onCategorySelect(name)}
          >
              {label}
          </button>
        );
    });

    return <div className="catalog">{buttons}</div>;
};

export default Catalog;