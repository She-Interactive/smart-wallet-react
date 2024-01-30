import { ConnectWallet, smartWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { NFTComponent } from "./components/nft";
import { ConnectUI } from "./components/connect";
import { AddSigner } from "./components/add-signer";
import { AddMetamask } from "./components/add-metamask";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <p>
            Signless + gasless UX using{" "}
            <a href="https://portal.thirdweb.com/wallet/local-wallet">
              LocalWallet
            </a>{" "}
            and{" "}
            <a href="https://portal.thirdweb.com/wallet/smart-wallet">
              SmartWallet
            </a>
          </p>
          <hr className="divider" />
          <p className="description">
            With <code className="code">{"<ConnectWallet />"}</code> UI
            component{" "}
          </p>
          <div className="connect">
            <ConnectWallet btnTitle="Connect" />
          </div>
        </div>
        <div className="connect">
          <hr className="divider" />
          <p className="description">
            With <code className="code">{"useConnect()"}</code> hook and custom
            UI
          </p>
        </div>
        <ConnectUI />
       
        <NFTComponent />
        <hr className="divider" />
        <AddMetamask />
      </div>
    </main>
  );
}
