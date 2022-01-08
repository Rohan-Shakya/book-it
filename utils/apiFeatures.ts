class APIFeatures {
  query: any;
  queryStr: any;
  constructor(query: any, queryStr: any) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...location });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // Remove fields for query
    const removeFields = ["location"];
    removeFields.forEach((el) => delete queryCopy[el]);

    this.query = this.query.find(queryCopy);
    return this;
  }
}

export default APIFeatures;
