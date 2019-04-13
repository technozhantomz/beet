import EOSmainnet from "./EOSmainnet";

export default class TLOS extends EOSmainnet {

    _getCoreToken() {
        return "TLOS";
    }

    getExplorer(account) {
        return "https://telos.eosx.io/account/" + account.accountName;
    }
}
