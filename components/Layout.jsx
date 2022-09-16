import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";
import { appContext } from "../providers/AppProvider";
import { http } from "../utils/http";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  const router = useRouter();
  const [state, dispatch] = useContext(appContext);

  return (
    <div className="flex">
      {state.loading ? (
        <div className="z-50 h-screen fixed top-0 left-0 w-screen flex justify-center items-center">
          <ReactLoading
            type="spinningBubbles"
            color="#0285FF"
            height={50}
            width={50}
          />
        </div>
      ) : (
        ""
      )}
      {router.pathname != "/sayinweb/login" ? <SideBar /> : ""}
      <div className="flex-grow overflow-auto h-screen">{children}</div>
    </div>
  );
}
