import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";

const EditProfileModal = ({ onClose }) => {
  const { user, setUser } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    pin: "",
    documents: {
      uidai: "N/A",
      pan: "N/A",
    },
    paymentDetails: {
      ifs_Code: "N/A",
    },
    geoLocation: {
      lat: "N/A",
      lon: "N/A",
    },
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* KEEPING YOUR useEffect */
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.fullName || "",
        email: user.email || "",
        mobileNumber: user.mobileNumber || "",
        gender: user.gender || "",
        dob: user.dob || "",
        address: user.address || "",
        city: user.city || "",
        pin: user.pin || "",
        documents: {
          ...prev.documents,
          ...user.documents,
        },
        paymentDetails: {
          ...prev.paymentDetails,
          ...user.paymentDetails,
        },
        geoLocation: {
          ...prev.geoLocation,
          ...user.geoLocation,
        },
      }));
    }
  }, [user]);

  /* VALIDATION */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobileNumber))
      newErrors.mobileNumber = "Mobile number must be 10 digits";

    if (!formData.city.trim()) newErrors.city = "City is required";

    if (!formData.pin.trim()) newErrors.pin = "PIN is required";
    else if (!/^\d{6}$/.test(formData.pin))
      newErrors.pin = "PIN must be 6 digits";

    if (
      formData.documents.pan !== "N/A" &&
      !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.documents.pan)
    ) {
      newErrors.pan = "Invalid PAN format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* HANDLERS */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleNestedChange = (parent, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: { ...prev[parent], [field]: value },
    }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  /* GEOLOCATION */
  const fetchLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setFormData((prev) => ({
          ...prev,
          geoLocation: {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          },
        }));
      },
      () => alert("Location permission denied")
    );
  };

  /* SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await api.put("/user/update", formData);
      if (res.data?.data) {
        setUser(res.data.data);
        sessionStorage.setItem(
          "CravingUser",
          JSON.stringify(res.data.data)
        );
        onClose();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-amber-200 w-full max-w-xl max-h-[85vh] overflow-y-auto p-6 shadow-2xl rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-red-600">Edit Profile</h2>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        {/* FULL NAME */}
        <label className="block text-sm font-medium mb-1">Full Name *</label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="border p-2 w-full mb-1"
        />
        {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}

        {/* EMAIL */}
        <label className="block text-sm font-medium mt-3 mb-1">Email</label>
        <input
          value={formData.email}
          disabled
          className="border p-2 w-full bg-gray-100"
        />

        {/* MOBILE */}
        <label className="block text-sm font-medium mt-3 mb-1">Mobile Number *</label>
        <input
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          className="border p-2 w-full mb-1"
        />
        {errors.mobileNumber && <p className="text-red-600 text-sm">{errors.mobileNumber}</p>}

        {/* CITY */}
        <label className="block text-sm font-medium mt-3 mb-1">City *</label>
        <input
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          className="border p-2 w-full mb-1"
        />
        {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}

        {/* PIN */}
        <label className="block text-sm font-medium mt-3 mb-1">PIN Code *</label>
        <input
          name="pin"
          value={formData.pin}
          onChange={handleInputChange}
          className="border p-2 w-full mb-1"
        />
        {errors.pin && <p className="text-red-600 text-sm">{errors.pin}</p>}

        {/* PAN */}
        <label className="block text-sm font-medium mt-3 mb-1">PAN</label>
        <input
          value={formData.documents.pan}
          onChange={(e) =>
            handleNestedChange("documents", "pan", e.target.value)
          }
          className="border p-2 w-full mb-1"
        />
        {errors.pan && <p className="text-red-600 text-sm">{errors.pan}</p>}

        {/* GEOLOCATION */}
        <button
          onClick={fetchLocation}
          className="border p-2 w-full my-4 bg-white"
        >
          Get Live Location{" "}
          {formData.geoLocation.lat !== "N/A" ? "✅" : ""}
        </button>

        {/* ACTIONS */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-amber-500 text-white rounded"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
