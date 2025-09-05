import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, ChefHat, Home, LogOut, Menu, Package, ShoppingCart, Users } from "lucide-react";
import { NavLink } from "@/components/nav-link";
import { logout } from "@/lib/actions";
import { CartProvider } from "@/context/CartContext";
import CartSheet from "@/components/cart-sheet";


export default async function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session || session.role !== 'customer') {
    // Redirect to login if not a customer or not logged in
    redirect('/login');
  }

  return (
    <CartProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <ChefHat className="h-6 w-6 text-orange-600" />
                <span className="">GourmetGo</span>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <NavLink href="/customer">
                  <Home className="h-4 w-4" />
                  Dashboard
                </NavLink>
                <NavLink href="/customer/menu">
                  <Package className="h-4 w-4" />
                  Menu
                </NavLink>
                <NavLink href="/customer/orders">
                  <ShoppingCart className="h-4 w-4" />
                  My Orders
                </NavLink>
                <NavLink href="/customer/profile">
                  <Users className="h-4 w-4" />
                  Profile
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold mb-4"
                  >
                    <ChefHat className="h-6 w-6 text-orange-600" />
                    <span className="">GourmetGo</span>
                  </Link>
                  <NavLink href="/customer">
                      <Home className="h-5 w-5" />
                      Dashboard
                  </NavLink>
                  <NavLink href="/customer/menu">
                      <Package className="h-5 w-5" />
                      Menu
                  </NavLink>
                  <NavLink href="/customer/orders">
                      <ShoppingCart className="h-5 w-5" />
                      My Orders
                  </NavLink>
                  <NavLink href="/customer/profile">
                      <Users className="h-5 w-5" />
                      Profile
                  </NavLink>
                </nav>
              </SheetContent>
            </Sheet>

            <div className="w-full flex-1">
              {/* Future search bar can go here */}
            </div>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            
            <CartSheet />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full h-8 w-8">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.avatar} alt={session.name} />
                    <AvatarFallback>{session.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <form action={logout}>
                  <DropdownMenuItem asChild>
                      <button type="submit" className="w-full text-left flex items-center">
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Logout</span>
                      </button>
                  </DropdownMenuItem>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-orange-50/30">
            {children}
          </main>
        </div>
      </div>
    </CartProvider>
  );
}
