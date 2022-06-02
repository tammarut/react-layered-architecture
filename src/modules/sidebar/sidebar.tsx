type Props = { navigations: { name: string; href: string }[] };

function SideBar(props: Props) {
  const { navigations } = props;
  return (
    <div>
      {navigations.map((navigation, index) => (
        <div key={index}>
          <a role="navigation" href={navigation.href}>
            {navigation.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
