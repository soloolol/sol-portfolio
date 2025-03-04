export type NestedList = {
  id: string;
  label: string;
  children?: NestedList[];
};

export const NestedListComponent: React.FC<{ items: NestedList[] }> = ({
  items,
}) => {
  return (
    <ul className="list-inside">
      {items.map((item) => (
        <li className="pl-3" key={item.id}>
          {item.label}
          {item.children && <NestedListComponent items={item.children} />}
        </li>
      ))}
    </ul>
  );
};
