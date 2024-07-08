import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  PenLine,
  LineChart,
  SearchIcon,
  SettingsIcon,
  Paintbrush,
  ListChecks,
  Bot,
} from "lucide-react";

export function OldProductCard() {
  return (
    <>
      <Card className="w-[350px]">
        <Image
          src="/placeholder.jpg"
          alt="Product Image"
          width={350}
          height={200}
          className="w-full h-[200px] object-cover rounded-t-md"
        />
        <CardContent>
          <h3 className="text-xl font-bold mt-5">Product Name</h3>
          <p className="text-muted-foreground mt-1">
            A short description of the product.
          </p>
          <div className="flex justify-between mt-4">
            <Button variant="outline">Learn More</Button>
            <Button>Visit Product</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export function NewProductCard(props) {
  const renderButton = (key, icon, label) => (
    <Button key={key}>
      {icon}
      {label}
    </Button>
  );

  return (
    <>
      <div className="group relative ">
        <Card className="w-[350px]">
          <div className="h-[200px] w-[350px] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-90 duration-300 rounded-b-none ">
            {/* <Image
              src={props.image ? props.image : "/placeholder.jpg"}
              alt="Image"
              className="h-full w-full object-cover object-center "
              width={350}
              height={200}
            /> */}

            {/* OLD VERSION WITH PROPER IMAGES */}
            {/* {props.image ? (
              <Image
                src={props.image}
                alt="Image"
                className="h-full w-full object-cover object-center"
                width={350}
                height={200}
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                No image selected
              </div>
            )} */}
            {props.image ? (
              <Image
                src={props.image}
                alt="Image"
                className="h-full w-full object-cover object-center"
                width={350}
                height={200}
              />
            ) : (
              <Image
                src="/placeholder.jpg"
                alt="Temporary Image"
                className="h-full w-full object-cover object-center"
                width={350}
                height={200}
              />
            )}
          </div>
          <CardContent>
            <div className="flex items-center gap-3 mt-5">
              {props.logo && (
                <Image
                  src={props.logo}
                  alt="logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              <h3 className="text-xl font-bold ">
                {props.name ? props.name : "Product Name"}
              </h3>
            </div>
            <p className="text-muted-foreground mt-1">
              {props.shortDescription
                ? props.shortDescription
                : "A short description of the product."}
            </p>
            {props.deal ? (
              <p className="text-primary font-semibold">{props.deal}</p>
            ) : (
              <br />
            )}
            {/* {props.} */}
            <div className="flex justify-between mt-4">
              <Link href="/products/example">
                <Button variant="outline">Learn More</Button>
              </Link>
              {/* This commented out link is when the user doesn't provide a https:// */}
              {/* <a
                href={`https://${props.website ? props.website : "#"}`}
                target="_blank"
                rel="noopener"
              > */}
              <a
                href={props.website ? props.website : "#"}
                target="_blank"
                rel="noopener"
              >
                <Button>Visit Product</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
