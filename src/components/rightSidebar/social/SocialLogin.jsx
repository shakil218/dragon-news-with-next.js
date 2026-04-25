import BackgroundWrapper from "../Q-zones/BackgroundWrapper";
import QZone from "../Q-zones/QZone";
import SocialLinks from "./SocialLinks";
import SocialLoginButton from "./SocialLoginButton";

const SocialLogin = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-6">
        <h3 className="text-lg font-bold border-b border-b-base-300 pb-2">
          Login With
        </h3>
        {/* SocialLoginButtons */}
        <SocialLoginButton />
      </div>

      {/* SocialLinks */}
      <div>
        <SocialLinks />
      </div>

      {/* QZone */}
      <div>
        <QZone />
      </div>

      {/* BackgroundWrapper */}
      <div>
        <BackgroundWrapper />
      </div>
    </div>
  );
};

export default SocialLogin;
