import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const adminStore = create((set) => ({
  //! admin-register
  adminRegisterLoading: false,
  adminRegisterRequest: async (data) => {
    try {
      set({ userRegisterLoading: true });
      let res = await axios.post(baseURL + `/admin-register`, data, {
        withCredentials: true,
        credentials: "include",
      });

      if (res?.data?.success === true) {
        set({ adminRegisterLoading: false });
        SuccessToast(res?.data?.message);
        return true;
      } else {
        set({ adminRegisterLoading: false });
        ErrorToast(res?.data?.message);
        return false;
      }
    } catch (error) {
      console.log(error);
      ErrorToast("Something went wrong");
      set({ adminRegisterLoading: false });
      return false;
    }
  },

  //! admin-login
  adminLoginLoading: false,
  adminLoginRequest: async (data) => {
    try {
      set({ adminLoginLoading: true });
      let res = await axios.post(baseURL + `/admin-login`, data, {
        withCredentials: true,
        credentials: "include",
      });

      if (res?.data?.success === true) {
        set({ adminLoginLoading: false });
        SuccessToast(res?.data?.message);
        return true;
      } else {
        set({ adminLoginLoading: false });
        ErrorToast(res?.data?.message);
        return false;
      }
    } catch (error) {
      console.log(error);
      ErrorToast("Something went wrong");
      set({ adminLoginLoading: false });
      return false;
    }
  },

  //! admin-verify
  adminVerifyRequest: async () => {
    try {
      await axios.get(baseURL + `/admin-verify`, {
        withCredentials: true,
        credentials: "include",
      });

      return true;
    } catch (error) {
      console.log(error);
      if (error?.status === 401) {
        window.location.href = "/super-admin/login";
      }
      ErrorToast("Something went wrong");
      return false;
    }
  },

  //! admin
  admin: null,
  adminRequest: async () => {
    try {
      let res = await axios.get(baseURL + `/admin`, {
        withCredentials: true,
        credentials: "include",
      });

      if (res?.data?.success === true) {
        set({ admin: res?.data?.data });

        return true;
      }
    } catch (error) {
      console.log(error);
      ErrorToast("Something went wrong");
      return false;
    }
  },

  //! admin-update
  adminUpdateLoading: false,
  adminUpdateRequest: async (data) => {
    try {
      set({ adminUpdateLoading: true });
      let res = await axios.put(baseURL + `/admin-update`, data, {
        withCredentials: true,
        credentials: "include",
      });

      if (res?.data?.success === true) {
        set({ adminUpdateLoading: false });
        SuccessToast(res?.data?.message);
        return true;
      } else {
        set({ adminUpdateLoading: false });
        ErrorToast(res?.data?.message);
        return false;
      }
    } catch (error) {
      console.log(error);
      set({ adminUpdateLoading: false });
      ErrorToast("Something went wrong");
      return false;
    }
  },

  //! admin-logout
  adminLogoutRequest: async () => {
    try {
      let res = await axios.get(baseURL + `/admin-logout`, {
        withCredentials: true,
        credentials: "include",
      });

      if (res?.data?.success === true) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      ErrorToast("Something went wrong");
      return false;
    }
  },
}));

export default adminStore;
