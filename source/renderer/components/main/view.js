import React from "react";
import styles from "./style";

import RankingActressComponent from "../ranking-actress/container";
import AdvertisementComponent from "../advertisement/view";
import SearchEntryComponent from "../search-entry/container";
import EntriesComponent from "../entries/container";

export default class Component extends React.Component {
  render() {
    return (
      <main className={styles.container}>
        <RankingActressComponent />

        <AdvertisementComponent>
          <a href="http://track.bannerbridge.net/click.php?APID=138222&affID=88332&siteID=172583" target="_blank">
            <img src="http://track.bannerbridge.net/adgserv.php?APID=138222&affID=88332&siteID=172583" />
          </a>
        </AdvertisementComponent>

        <SearchEntryComponent />

        <EntriesComponent />

        <AdvertisementComponent>
          <a href="http://track.bannerbridge.net/clickprod.php?adID=1661429&affID=88332&siteID=172583" target="_blank">
            <img src="http://track.bannerbridge.net/adgprod.php?adID=1661429&affID=88332&siteID=172583" />
          </a>
        </AdvertisementComponent>
      </main>
    );
  }
}
