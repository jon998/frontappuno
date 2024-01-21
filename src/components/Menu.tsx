import Link from "next/link";
function Menu() {
  return (
    <nav >
      <ul className="w-full flex border border-gray-100 bg-white text-sm text-gray-900 dark:border-gray-600 dark:bg-nav dark:text-gray-400">
        <li className="w-full margin-0-auto rounded-t-lg border-gray-200 px-4 py-2 dark:border-gray-600"><Link href={"/"} className="cursor-pointer">Inicio</Link></li>
        <li className="w-full rounded-t-lg border-gray-200 px-4 py-2 dark:border-gray-600"><Link href={"/pages/Nuevo/new"} className="cursor-pointer">Nuevo Usuario</Link></li>
        <li className="w-full rounded-t-lg border-gray-200 px-4 py-2 dark:border-gray-600"><Link href={"/pages/Listado"} className="cursor-pointer">Listar Usuarios</Link></li>
      </ul>
    </nav>
  )
}

export default Menu