import React from "react";
import styles from "./style";

export default class Component extends React.Component {
  componentDidMount() {
    this.props.loadVideosData();
  }

  render() {
    const entryItems = this.props.entries.list.filter(entryData => {
      const queryString = this.props.entries.entrySearchQuery;

      if((queryString && queryString.length > 0) &&
          (entryData.title.indexOf(queryString) < 0) &&
          (entryData.tags.join(",").indexOf(queryString) < 0)) {
        return false;
      }
      else {
        return true;
      }
    }).map(entryData => {
      const tagItems = entryData.tags.map(tag => {
        return (
          <li className={styles.item_tag}>
            {tag}
          </li>
        );
      });

      return (
        <li className={styles.item_entry} onClick={this.props.clickEntryItem(entryData.videoId)}>
          <h2 className={styles.title_entry}>
            {entryData.title}
          </h2>

          <ul className={styles.list_tags}>
            {tagItems}
          </ul>

          {(() => {
            if(this.props.entries.selectedId == entryData.videoId) {
              return (
                <iframe className={styles.videoframe}
                    frameBorder="0" scrolling="no" allowFullScreen="true"
                    src={"http://embed.share-videos.se/auto/embed/" + entryData.videoId + "?uid=6665&img=" + entryData.imageId}></iframe>
              );
            }
          })()}
        </li>
      );
    });

    return (
      <div className={styles.container}>
        <ul className={styles.list_entries}>
          {entryItems}
        </ul>
      </div>
    );
  }
}
