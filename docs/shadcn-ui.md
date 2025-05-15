## Using shadcn/ui in This Next.js Project

This project leverages the `shadcn/ui` component library to provide a set of accessible and customizable UI components. These components are integrated with Next.js features to build a robust and performant application.

### Integration with Next.js Features

`shadcn/ui` components are designed to be easily integrated with Next.js functionalities. Here are a few examples:

-   **Navigation with `next/link`:** Components like the `Button` are often used in conjunction with Next.js's `next/link` for client-side navigation without full page reloads. This is demonstrated in files where buttons are used to link to different routes within the application. For instance, you might find a `Button` wrapped within a `Link` component:
```
typescript
    import Link from "next/link";
    import { Button } from "@/components/ui/button";

    // ...

    <Link href="/dashboard">
      <Button>Go to Dashboard</Button>
    </Link>
    
```
In this example, clicking the `Button` will trigger a client-side transition to the `/dashboard` route thanks to the `next/link` wrapper.

-   **Image Optimization with `next/image`:** While not explicitly a `shadcn/ui` component, `next/image` is commonly used within components to handle image optimization. If a `shadcn/ui` component were to display an image (e.g., an `Avatar`), you would typically use `next/image` for better performance:
```
typescript
    import Image from "next/image";
    import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

    // ...

    <Avatar>
      <AvatarImage src="/avatars/01.png" alt="User Avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    
```
The `AvatarImage` would internally render an `<img>` tag, and when used with `next/image`, Next.js would handle optimization like lazy loading and different image formats.

### Example Usage: Buttons and Links

Looking at the project files, you can see examples of `shadcn/ui`'s `Button` being used for various actions and navigation. For instance, in `app/dashboard/campaigns/[campaignId]/page.tsx`, `Button` components are used for actions like "Edit", "Duplicate", and "Pause Campaign". Some of these buttons, while not directly wrapped in `next/link` in that specific file's example, would typically be used that way for navigation in a real application. The `Link` component from `next/link` is explicitly used for navigation, such as the "View Recipients" button which navigates to a dynamic route:
```
typescript
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

// ...

<Link
  href={`/dashboard/campaigns/${campaignId}/clients`}
  className={buttonVariants({ variant: "outline", size: "sm" })}
>
  {t.buttons.viewRecipients}
</Link>
```
This demonstrates how `shadcn/ui` components like `Button` are styled and then combined with Next.js's navigation features.

By integrating `shadcn/ui` components and following these patterns, the project ensures a consistent and efficient user interface experience within the Next.js framework.