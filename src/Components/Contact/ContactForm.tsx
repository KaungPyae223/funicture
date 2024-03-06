import {
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import React from "react";
import { useCountries } from "use-react-countries";

const ContactForm = () => {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  return (
    <div className="col-span-2">
      <div className=" w-4/5 mx-auto grid gap-5">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              First Name
            </Typography>
            <Input
              size="lg"
              placeholder="First Name"
              className=" !border-t-blue-gray-200 focus:!border-green-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Last Name
            </Typography>
            <Input
              size="lg"
              placeholder="Last Name"
              className=" !border-t-blue-gray-200 focus:!border-green-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Companoy Name
          </Typography>
          <Input
            size="lg"
            placeholder="Company Name"
            className=" !border-t-blue-gray-200 focus:!border-green-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="Someone@email.com"
            className=" !border-t-blue-gray-200 focus:!border-green-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Phone Number
          </Typography>
          <div className="relative flex w-full">
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className="flex items-center gap-2 rounded-md rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-4 w-4 rounded-full object-cover"
                  />
                  {countryCallingCode}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-[20rem] max-w-[18rem]">
                {countries.map(({ name, flags, countryCallingCode }, index) => {
                  return (
                    <MenuItem
                      key={name}
                      value={name}
                      className="flex items-center gap-2"
                      onClick={() => setCountry(index)}
                    >
                      <img
                        src={flags.svg}
                        alt={name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {name}{" "}
                      <span className="ml-auto">{countryCallingCode}</span>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            <Input
              size="lg"
              placeholder="Phone No"
              className=" rounded-l-none !border-t-blue-gray-200 focus:!border-green-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Message
          </Typography>
          <textarea
            class="peer min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-300 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          ></textarea>
        </div>
        <Checkbox
          color="green"
          label={
            <Typography color="blue-gray" className="flex font-medium">
              I undersatnad and Agree to the
              <Typography
                as="a"
                href="#"
                color="blue"
                className="font-medium transition-colors hover:text-blue-700"
              >
                &nbsp;Privacy Policies
              </Typography>
              .
            </Typography>
          }
        />

        <Button
          variant="filled"
          className="bg-green-400 py-4 font-heading text-base normal-case"
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
