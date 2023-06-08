import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Navlist from "./Navlist";


const drawerWidth = 300;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  console.log(mobileOpen);
  const drawer = (
    <div className="bg-gray-50 h-full font-[Roboto]">
      <img
        className="h-40 w-40 rounded-full border border-solid block mx-auto my-5"
        src="https://scontent.fcla4-1.fna.fbcdn.net/v/t39.30808-6/311157526_589456529637239_5236811046150183925_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFRE6HAgoBOBDNQSzY2sEDv8sEaWNqzBGzywRpY2rMEbEnWuzgh6PKoop1jScwYz_ossqukPbIyFWqBfkxzGTGl&_nc_ohc=KlIYkOO9UDgAX_SEpr5&_nc_ht=scontent.fcla4-1.fna&oh=00_AfBlDBBw61rP8MpiI2UpvoOKxhO4pIHUksyKZxscXFWn4w&oe=648721D3"
        alt=""
      />
      <Navlist
        handleDrawerToggle={handleDrawerToggle}
        setMobileOpen={setMobileOpen}
        mobileOpen={mobileOpen}
      ></Navlist>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" }, zIndex: "100", color: "#ffffff",borderBottom:"2px solid #20c997",margin:"10px",position:"absolute" }}
      >
        <MenuIcon />
      </IconButton>
      <Box sx={{ display: "flex" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
