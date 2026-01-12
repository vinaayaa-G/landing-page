import "./Securtity.css";
import SecurityCard from "./SecurityCard";
import {
  MdLock,
  MdPerson,
  MdMonitorHeart,
  MdPhonelinkLock
} from "react-icons/md";

const Security = () => {
  return (
    <section className="security-wrapper">

      {/* SECURITY PROTOCOL TAG */}
      <div className="security-tag">SECURITY PROTOCOLS</div>

      {/* HEADING */}
      <h1 className="security-heading">
        Build for Security. <span>Designed for Trust</span>
      </h1>

      {/* SUBTITLE */}
      <p className="security-subtitle">
        Enterprise-grade security protocols protecting every transaction
      </p>

      {/* CARDS */}
      <div className="security-grid">
        <SecurityCard
          icon={<MdLock />}
          title="End-To-End Encryption"
          desc="All data transmitted through VG pay is Protected with military-grade AES 256-bit encryption"
        />

        <SecurityCard
          icon={<MdPerson />}
          title="Role-Based Access Control"
          desc="Granular permissions system ensuring staff only access features relevent to their role"
        />

        <SecurityCard
          icon={<MdMonitorHeart />}
          title="Real-Time Threat Monitoring"
          desc="24/7 automated monitoring detects and prevents suspicious activities instantly"
        />

        <SecurityCard
          icon={<MdPhonelinkLock />}
          title="Device -Level Lockdown"
          desc="Remote device management with instant lockdown capabilities for lost or stolen devices"
        />
      </div>

    </section>
  );
};

export default Security;

