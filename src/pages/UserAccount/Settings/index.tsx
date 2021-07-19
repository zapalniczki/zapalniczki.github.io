import React from "react";
import PageColumns from "components/PageColumns";
import CompanyInfo from "./CompanyInfo";
import EditForm from "./EditForm";

type Props = {
  userId: string;
};

const Settings = ({ userId }: Props) => {
  return (
    <PageColumns>
      <div>
        <EditForm userId={userId} />
      </div>
      <div>
        <CompanyInfo userId={userId} />
      </div>
    </PageColumns>
  );
};

export default Settings;
