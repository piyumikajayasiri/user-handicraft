import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link href="">Home</Link>
          <Link href="">All Products</Link>
          <Link href="">Categories</Link>
          <Link href="">Account</Link>
          <Link href="">Cart</Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
            <SignOutButton />
          </SignedIn>
          <search></search>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
