/**
 * 가상 동네 카페 '달빛 모퉁이' 30일 매출 데이터
 * (Fictional Cafe Sales Dataset - 30 Days x 5 Menu Items)
 */
const CAFE_SALES_DATA = {
    "cafe_name":  "달빛 모퉁이 카페 (月光街角咖啡馆 / Moonlight Cafe)",
    "menu_list":  [
                      {
                          "price":  4000,
                          "name_cn":  "美式咖啡",
                          "baseQty":  48,
                          "name":  "아메리카노",
                          "id":  "americano"
                      },
                      {
                          "price":  4500,
                          "name_cn":  "拿铁咖啡",
                          "baseQty":  34,
                          "name":  "카페라떼",
                          "id":  "latte"
                      },
                      {
                          "price":  5000,
                          "name_cn":  "香草拿铁",
                          "baseQty":  22,
                          "name":  "바닐라 라떼",
                          "id":  "vanilla_latte"
                      },
                      {
                          "price":  4800,
                          "name_cn":  "冷萃咖啡",
                          "baseQty":  25,
                          "name":  "콜드브루",
                          "id":  "cold_brew"
                      },
                      {
                          "price":  3500,
                          "name_cn":  "牛角可颂",
                          "baseQty":  20,
                          "name":  "크루아상",
                          "id":  "croissant"
                      }
                  ],
    "daily_records":  [
                          {
                              "total_revenue":  690500,
                              "day_of_week_index":  0,
                              "day_of_week":  "월",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周一",
                              "day":  1,
                              "total_qty":  159,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  25,
                                                              "revenue":  87500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  27,
                                                                  "revenue":  135000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  32,
                                                          "revenue":  144000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  45,
                                                              "revenue":  180000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  30,
                                                              "revenue":  144000
                                                          }
                                        },
                              "date_str":  "10월 1일 (월)"
                          },
                          {
                              "total_revenue":  664100,
                              "day_of_week_index":  1,
                              "day_of_week":  "화",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周二",
                              "day":  2,
                              "total_qty":  152,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  19,
                                                              "revenue":  66500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  26,
                                                                  "revenue":  130000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  36,
                                                          "revenue":  162000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  44,
                                                              "revenue":  176000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  27,
                                                              "revenue":  129600
                                                          }
                                        },
                              "date_str":  "10월 2일 (화)"
                          },
                          {
                              "total_revenue":  645800,
                              "day_of_week_index":  2,
                              "day_of_week":  "수",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周三",
                              "day":  3,
                              "total_qty":  149,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  17,
                                                              "revenue":  59500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  22,
                                                                  "revenue":  110000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  31,
                                                          "revenue":  139500
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  53,
                                                              "revenue":  212000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  26,
                                                              "revenue":  124800
                                                          }
                                        },
                              "date_str":  "10월 3일 (수)"
                          },
                          {
                              "total_revenue":  645800,
                              "day_of_week_index":  3,
                              "day_of_week":  "목",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周四",
                              "day":  4,
                              "total_qty":  150,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  23,
                                                              "revenue":  80500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  19,
                                                                  "revenue":  95000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  35,
                                                          "revenue":  157500
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  47,
                                                              "revenue":  188000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  26,
                                                              "revenue":  124800
                                                          }
                                        },
                              "date_str":  "10월 4일 (목)"
                          },
                          {
                              "total_revenue":  658700,
                              "day_of_week_index":  4,
                              "day_of_week":  "금",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周五",
                              "day":  5,
                              "total_qty":  151,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  18,
                                                              "revenue":  63000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  21,
                                                                  "revenue":  105000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  39,
                                                          "revenue":  175500
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  44,
                                                              "revenue":  176000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  29,
                                                              "revenue":  139200
                                                          }
                                        },
                              "date_str":  "10월 5일 (금)"
                          },
                          {
                              "total_revenue":  853200,
                              "day_of_week_index":  5,
                              "day_of_week":  "토",
                              "is_weekend":  true,
                              "day_of_week_cn":  "周六",
                              "day":  6,
                              "total_qty":  199,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  30,
                                                              "revenue":  105000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  24,
                                                                  "revenue":  120000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  50,
                                                          "revenue":  225000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  66,
                                                              "revenue":  264000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  29,
                                                              "revenue":  139200
                                                          }
                                        },
                              "date_str":  "10월 6일 (토)"
                          },
                          {
                              "total_revenue":  791600,
                              "day_of_week_index":  6,
                              "day_of_week":  "일",
                              "is_weekend":  true,
                              "day_of_week_cn":  "周日",
                              "day":  7,
                              "total_qty":  182,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  21,
                                                              "revenue":  73500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  24,
                                                                  "revenue":  120000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  41,
                                                          "revenue":  184500
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  59,
                                                              "revenue":  236000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  37,
                                                              "revenue":  177600
                                                          }
                                        },
                              "date_str":  "10월 7일 (일)"
                          },
                          {
                              "total_revenue":  606900,
                              "day_of_week_index":  0,
                              "day_of_week":  "월",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周一",
                              "day":  8,
                              "total_qty":  141,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  19,
                                                              "revenue":  66500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  18,
                                                                  "revenue":  90000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  32,
                                                          "revenue":  144000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  49,
                                                              "revenue":  196000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  23,
                                                              "revenue":  110400
                                                          }
                                        },
                              "date_str":  "10월 8일 (월)"
                          },
                          {
                              "total_revenue":  646300,
                              "day_of_week_index":  1,
                              "day_of_week":  "화",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周二",
                              "day":  9,
                              "total_qty":  149,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  16,
                                                              "revenue":  56000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  20,
                                                                  "revenue":  100000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  35,
                                                          "revenue":  157500
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  52,
                                                              "revenue":  208000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  26,
                                                              "revenue":  124800
                                                          }
                                        },
                              "date_str":  "10월 9일 (화)"
                          },
                          {
                              "total_revenue":  657300,
                              "day_of_week_index":  2,
                              "day_of_week":  "수",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周三",
                              "day":  10,
                              "total_qty":  154,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  25,
                                                              "revenue":  87500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  19,
                                                                  "revenue":  95000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  36,
                                                          "revenue":  162000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  53,
                                                              "revenue":  212000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  21,
                                                              "revenue":  100800
                                                          }
                                        },
                              "date_str":  "10월 10일 (수)"
                          },
                          {
                              "total_revenue":  659400,
                              "day_of_week_index":  3,
                              "day_of_week":  "목",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周四",
                              "day":  11,
                              "total_qty":  154,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  24,
                                                              "revenue":  84000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  18,
                                                                  "revenue":  90000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  38,
                                                          "revenue":  171000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  51,
                                                              "revenue":  204000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  23,
                                                              "revenue":  110400
                                                          }
                                        },
                              "date_str":  "10월 11일 (목)"
                          },
                          {
                              "total_revenue":  650900,
                              "day_of_week_index":  4,
                              "day_of_week":  "금",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周五",
                              "day":  12,
                              "total_qty":  150,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  19,
                                                              "revenue":  66500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  19,
                                                                  "revenue":  95000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  38,
                                                          "revenue":  171000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  46,
                                                              "revenue":  184000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  28,
                                                              "revenue":  134400
                                                          }
                                        },
                              "date_str":  "10월 12일 (금)"
                          },
                          {
                              "total_revenue":  891400,
                              "day_of_week_index":  5,
                              "day_of_week":  "토",
                              "is_weekend":  true,
                              "day_of_week_cn":  "周六",
                              "day":  13,
                              "total_qty":  204,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  24,
                                                              "revenue":  84000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  33,
                                                                  "revenue":  165000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  48,
                                                          "revenue":  216000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  61,
                                                              "revenue":  244000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  38,
                                                              "revenue":  182400
                                                          }
                                        },
                              "date_str":  "10월 13일 (토)"
                          },
                          {
                              "total_revenue":  868900,
                              "day_of_week_index":  6,
                              "day_of_week":  "일",
                              "is_weekend":  true,
                              "day_of_week_cn":  "周日",
                              "day":  14,
                              "total_qty":  201,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  28,
                                                              "revenue":  98000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  32,
                                                                  "revenue":  160000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  41,
                                                          "revenue":  184500
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  67,
                                                              "revenue":  268000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  33,
                                                              "revenue":  158400
                                                          }
                                        },
                              "date_str":  "10월 14일 (일)"
                          },
                          {
                              "total_revenue":  652100,
                              "day_of_week_index":  0,
                              "day_of_week":  "월",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周一",
                              "day":  15,
                              "total_qty":  151,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  25,
                                                              "revenue":  87500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  26,
                                                                  "revenue":  130000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  34,
                                                          "revenue":  153000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  44,
                                                              "revenue":  176000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  22,
                                                              "revenue":  105600
                                                          }
                                        },
                              "date_str":  "10월 15일 (월)"
                          },
                          {
                              "total_revenue":  681400,
                              "day_of_week_index":  1,
                              "day_of_week":  "화",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周二",
                              "day":  16,
                              "total_qty":  156,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  18,
                                                              "revenue":  63000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  26,
                                                                  "revenue":  130000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  36,
                                                          "revenue":  162000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  48,
                                                              "revenue":  192000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  28,
                                                              "revenue":  134400
                                                          }
                                        },
                              "date_str":  "10월 16일 (화)"
                          },
                          {
                              "total_revenue":  702100,
                              "day_of_week_index":  2,
                              "day_of_week":  "수",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周三",
                              "day":  17,
                              "total_qty":  163,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  25,
                                                              "revenue":  87500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  27,
                                                                  "revenue":  135000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  36,
                                                          "revenue":  162000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  53,
                                                              "revenue":  212000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  22,
                                                              "revenue":  105600
                                                          }
                                        },
                              "date_str":  "10월 17일 (수)"
                          },
                          {
                              "total_revenue":  676000,
                              "day_of_week_index":  3,
                              "day_of_week":  "목",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周四",
                              "day":  18,
                              "total_qty":  156,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  24,
                                                              "revenue":  84000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  25,
                                                                  "revenue":  125000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  30,
                                                          "revenue":  135000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  47,
                                                              "revenue":  188000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  30,
                                                              "revenue":  144000
                                                          }
                                        },
                              "date_str":  "10월 18일 (목)"
                          },
                          {
                              "total_revenue":  644500,
                              "day_of_week_index":  4,
                              "day_of_week":  "금",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周五",
                              "day":  19,
                              "total_qty":  148,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  16,
                                                              "revenue":  56000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  21,
                                                                  "revenue":  105000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  31,
                                                          "revenue":  139500
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  50,
                                                              "revenue":  200000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  30,
                                                              "revenue":  144000
                                                          }
                                        },
                              "date_str":  "10월 19일 (금)"
                          },
                          {
                              "total_revenue":  851600,
                              "day_of_week_index":  5,
                              "day_of_week":  "토",
                              "is_weekend":  true,
                              "day_of_week_cn":  "周六",
                              "day":  20,
                              "total_qty":  196,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  24,
                                                              "revenue":  84000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  29,
                                                                  "revenue":  145000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  50,
                                                          "revenue":  225000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  61,
                                                              "revenue":  244000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  32,
                                                              "revenue":  153600
                                                          }
                                        },
                              "date_str":  "10월 20일 (토)"
                          },
                          {
                              "total_revenue":  941200,
                              "day_of_week_index":  6,
                              "day_of_week":  "일",
                              "is_weekend":  true,
                              "day_of_week_cn":  "周日",
                              "day":  21,
                              "total_qty":  218,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  33,
                                                              "revenue":  115500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  33,
                                                                  "revenue":  165000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  51,
                                                          "revenue":  229500
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  67,
                                                              "revenue":  268000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  34,
                                                              "revenue":  163200
                                                          }
                                        },
                              "date_str":  "10월 21일 (일)"
                          },
                          {
                              "total_revenue":  638200,
                              "day_of_week_index":  0,
                              "day_of_week":  "월",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周一",
                              "day":  22,
                              "total_qty":  147,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  20,
                                                              "revenue":  70000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  26,
                                                                  "revenue":  130000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  30,
                                                          "revenue":  135000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  47,
                                                              "revenue":  188000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  24,
                                                              "revenue":  115200
                                                          }
                                        },
                              "date_str":  "10월 22일 (월)"
                          },
                          {
                              "total_revenue":  626500,
                              "day_of_week_index":  1,
                              "day_of_week":  "화",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周二",
                              "day":  23,
                              "total_qty":  145,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  19,
                                                              "revenue":  66500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  21,
                                                                  "revenue":  105000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  30,
                                                          "revenue":  135000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  50,
                                                              "revenue":  200000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  25,
                                                              "revenue":  120000
                                                          }
                                        },
                              "date_str":  "10월 23일 (화)"
                          },
                          {
                              "total_revenue":  713000,
                              "day_of_week_index":  2,
                              "day_of_week":  "수",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周三",
                              "day":  24,
                              "total_qty":  165,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  25,
                                                              "revenue":  87500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  23,
                                                                  "revenue":  115000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  37,
                                                          "revenue":  166500
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  50,
                                                              "revenue":  200000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  30,
                                                              "revenue":  144000
                                                          }
                                        },
                              "date_str":  "10월 24일 (수)"
                          },
                          {
                              "total_revenue":  695600,
                              "day_of_week_index":  3,
                              "day_of_week":  "목",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周四",
                              "day":  25,
                              "total_qty":  161,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  24,
                                                              "revenue":  84000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  25,
                                                                  "revenue":  125000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  34,
                                                          "revenue":  153000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  51,
                                                              "revenue":  204000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  27,
                                                              "revenue":  129600
                                                          }
                                        },
                              "date_str":  "10월 25일 (목)"
                          },
                          {
                              "total_revenue":  659100,
                              "day_of_week_index":  4,
                              "day_of_week":  "금",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周五",
                              "day":  26,
                              "total_qty":  153,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  23,
                                                              "revenue":  80500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  26,
                                                                  "revenue":  130000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  30,
                                                          "revenue":  135000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  52,
                                                              "revenue":  208000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  22,
                                                              "revenue":  105600
                                                          }
                                        },
                              "date_str":  "10월 26일 (금)"
                          },
                          {
                              "total_revenue":  855400,
                              "day_of_week_index":  5,
                              "day_of_week":  "토",
                              "is_weekend":  true,
                              "day_of_week_cn":  "周六",
                              "day":  27,
                              "total_qty":  198,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  28,
                                                              "revenue":  98000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  30,
                                                                  "revenue":  150000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  42,
                                                          "revenue":  189000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  65,
                                                              "revenue":  260000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  33,
                                                              "revenue":  158400
                                                          }
                                        },
                              "date_str":  "10월 27일 (토)"
                          },
                          {
                              "total_revenue":  892000,
                              "day_of_week_index":  6,
                              "day_of_week":  "일",
                              "is_weekend":  true,
                              "day_of_week_cn":  "周日",
                              "day":  28,
                              "total_qty":  207,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  28,
                                                              "revenue":  98000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  29,
                                                                  "revenue":  145000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  50,
                                                          "revenue":  225000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  70,
                                                              "revenue":  280000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  30,
                                                              "revenue":  144000
                                                          }
                                        },
                              "date_str":  "10월 28일 (일)"
                          },
                          {
                              "total_revenue":  617500,
                              "day_of_week_index":  0,
                              "day_of_week":  "월",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周一",
                              "day":  29,
                              "total_qty":  142,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  17,
                                                              "revenue":  59500
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  22,
                                                                  "revenue":  110000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  32,
                                                          "revenue":  144000
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  46,
                                                              "revenue":  184000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  25,
                                                              "revenue":  120000
                                                          }
                                        },
                              "date_str":  "10월 29일 (월)"
                          },
                          {
                              "total_revenue":  701100,
                              "day_of_week_index":  1,
                              "day_of_week":  "화",
                              "is_weekend":  false,
                              "day_of_week_cn":  "周二",
                              "day":  30,
                              "total_qty":  161,
                              "sales":  {
                                            "croissant":  {
                                                              "unit_price":  3500,
                                                              "name_cn":  "牛角可颂",
                                                              "name":  "크루아상",
                                                              "qty":  20,
                                                              "revenue":  70000
                                                          },
                                            "vanilla_latte":  {
                                                                  "unit_price":  5000,
                                                                  "name_cn":  "香草拿铁",
                                                                  "name":  "바닐라 라떼",
                                                                  "qty":  27,
                                                                  "revenue":  135000
                                                              },
                                            "latte":  {
                                                          "unit_price":  4500,
                                                          "name_cn":  "拿铁咖啡",
                                                          "name":  "카페라떼",
                                                          "qty":  37,
                                                          "revenue":  166500
                                                      },
                                            "americano":  {
                                                              "unit_price":  4000,
                                                              "name_cn":  "美式咖啡",
                                                              "name":  "아메리카노",
                                                              "qty":  50,
                                                              "revenue":  200000
                                                          },
                                            "cold_brew":  {
                                                              "unit_price":  4800,
                                                              "name_cn":  "冷萃咖啡",
                                                              "name":  "콜드브루",
                                                              "qty":  27,
                                                              "revenue":  129600
                                                          }
                                        },
                              "date_str":  "10월 30일 (화)"
                          }
                      ],
    "summary":  {
                    "total_revenue":  21478100,
                    "total_items_sold":  4962,
                    "dow_averages":  [
                                         {
                                             "day_of_week_cn":  "周一",
                                             "day_of_week":  "월",
                                             "total_revenue":  3205200,
                                             "count":  5,
                                             "average_revenue":  641040
                                         },
                                         {
                                             "day_of_week_cn":  "周二",
                                             "day_of_week":  "화",
                                             "total_revenue":  3319400,
                                             "count":  5,
                                             "average_revenue":  663880
                                         },
                                         {
                                             "day_of_week_cn":  "周三",
                                             "day_of_week":  "수",
                                             "total_revenue":  2718200,
                                             "count":  4,
                                             "average_revenue":  679550
                                         },
                                         {
                                             "day_of_week_cn":  "周四",
                                             "day_of_week":  "목",
                                             "total_revenue":  2676800,
                                             "count":  4,
                                             "average_revenue":  669200
                                         },
                                         {
                                             "day_of_week_cn":  "周五",
                                             "day_of_week":  "금",
                                             "total_revenue":  2613200,
                                             "count":  4,
                                             "average_revenue":  653300
                                         },
                                         {
                                             "day_of_week_cn":  "周六",
                                             "day_of_week":  "토",
                                             "total_revenue":  3451600,
                                             "count":  4,
                                             "average_revenue":  862900
                                         },
                                         {
                                             "day_of_week_cn":  "周日",
                                             "day_of_week":  "일",
                                             "total_revenue":  3493700,
                                             "count":  4,
                                             "average_revenue":  873425
                                         }
                                     ],
                    "total_days":  30,
                    "menu_stats":  {
                                       "croissant":  {
                                                         "id":  "croissant",
                                                         "name":  "크루아상",
                                                         "total_qty":  677,
                                                         "total_revenue":  2369500,
                                                         "price":  3500,
                                                         "name_cn":  "牛角可颂"
                                                     },
                                       "vanilla_latte":  {
                                                             "id":  "vanilla_latte",
                                                             "name":  "바닐라 라떼",
                                                             "total_qty":  738,
                                                             "total_revenue":  3690000,
                                                             "price":  5000,
                                                             "name_cn":  "香草拿铁"
                                                         },
                                       "latte":  {
                                                     "id":  "latte",
                                                     "name":  "카페라떼",
                                                     "total_qty":  1122,
                                                     "total_revenue":  5049000,
                                                     "price":  4500,
                                                     "name_cn":  "拿铁咖啡"
                                                 },
                                       "americano":  {
                                                         "id":  "americano",
                                                         "name":  "아메리카노",
                                                         "total_qty":  1588,
                                                         "total_revenue":  6352000,
                                                         "price":  4000,
                                                         "name_cn":  "美式咖啡"
                                                     },
                                       "cold_brew":  {
                                                         "id":  "cold_brew",
                                                         "name":  "콜드브루",
                                                         "total_qty":  837,
                                                         "total_revenue":  4017600,
                                                         "price":  4800,
                                                         "name_cn":  "冷萃咖啡"
                                                     }
                                   },
                    "daily_average_revenue":  715937
                },
    "period":  "2026년 10월 1일 ~ 10월 30일 (30일간)"
};
