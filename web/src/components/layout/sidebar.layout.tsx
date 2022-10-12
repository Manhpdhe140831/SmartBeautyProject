import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";
import { UserRole } from "../../const/user-role.const";
import CoreNavbar from "../navbar/_navbar";

const SidebarLayout = ({children, role}: PropsWithChildren<{ role: UserRole }>) => {
  return <AppShell
    padding="md"
    navbar={<CoreNavbar userRole={role} width={{base: 300}}/>}
    styles={(theme) => ({
      main: {backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]}
    })}
  >
    {/* Your application here */}
    {children}
  </AppShell>;
};

export default SidebarLayout;
