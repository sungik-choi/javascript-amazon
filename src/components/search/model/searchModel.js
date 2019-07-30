export default class searchModel {
  constructor(limitedNum) {
    this.recentSearches = [];
    this.autocomData = [
      'diplomatic',
      'opposition',
      'parameter',
      'understanding',
      'favorable',
      'beautiful',
      'multimedia',
      'publication',
      'timetable',
      'identity',
      'demonstrator',
      'manufacture',
      'minority',
      'constellation',
      'legislation',
      'community',
      'recovery',
      'astonishing',
      'miserable',
      'motorcycle',
    ];
    this.limitedNum = limitedNum
  }

  setRecentSearches(searchedVal) {
    this.recentSearches = [...new Set([searchedVal, ...this.recentSearches])];
    if(this.recentSearches.length > this.limitedNum) this.manageRecentSearches(this.limitedNum);
  }

  getRecentSearches() {
    return this.recentSearches;
  }

  manageRecentSearches() {
    this.recentSearches.length = this.limitedNum;
  }
}