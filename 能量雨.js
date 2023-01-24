// 蚂蚁森林 能量雨
function energy_rain() {
    let running = true; 
    let debug = false;
    const mask = read_mask('iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAIAAAAAWSnCAAAAAXNSR0IArs4c6QAAAANzQklUCAgI2+FP4AAAIABJREFUeJyMvWmTHElyJfhUzfyIOyLvTCATQKGO7uommzPClR1+2D+2P2x/wIqsyM6IcEi2sNBdF27kHZFx+2WmOh/MPSIShebQP6CjMj3D3dTUVJ8+fWZN//e7bmxczLDw1hBDidRonGJ/wM9Ou/8wil52zJMYI4sOiRGnbAnkK5pVuFnph5W8W1TvC7nN9cHrUrlQrkBe4JnBzGguIgIp/sZFCoAAVXr8i/Dff+sPlQCoKkgJLCKqCgBCSlBVIhNuFKh4kJJXAaBCAJyCiASqQh7wUj/KK8RDib1ClAovNuIqtSYisURQgrDVKMFwv/XtaffvDuzvEpyQdJg7UAOAI1HKKkwz3MzKnxbuzdK/LWmsZqU291IywzATQ5Rr6zw2xpcuAQAwoI9/yKQItiPFjgU39+9OAAHKhqAMAKzeKTETQQQADDHIq8IQCxSsULZQITUADMGrkooHG0OqniBeQUSkKRmbWo5ImISIWCnmbouOjlrf7Cd/P7QvYoxY28ypqBBU2SnKHFdz/8uk/Guu73O98bQSXgtKUjFWQaQQEBoT/dY6sjHarvsoyWbwgDCpARQegBIR1CsFu8hnXqWKXTcMX01gS6pKxKSqqiAxxGJUFCxQQFmhuvFKQ0ykpfrglURkDKsoiTCJtUYtBACLidHu8sle8vVJ5089epniEN4yRwoAzlHusagwnrpfZ9WrmXvteex5SeRBniDESobxpYsUSkLK4DD5zdBUwcG0SgqwkkJVidUgODkpKSOsIhUwAAYJlKECJfDG4x77HYhByoASKaCkqiRETCrERkSISQQGqkKqQkSAWiJVUTKsKiQMKClBrYUSESmxT9rmaD/95rTzX3v0zGLoHKc28V5Bjrkscb/Cu0n57w/5zzmu1cyEK2LHDDIgMlovito1SLdrxJAqgQnSuBiHIREEygRC/VumrSUVwVnqRUtEBqqqYUgGAGojcr10SABVHwakqkSAEltSTxCBKiDWsogSlAhEJKpKqiCFGEAZ4qEQIWYlYmVi55xlKMPE1G5Fh8ft70bx77p0YWUEjQxYVISdYFXhfunfzKof5/JTYa+Fl4KSDYgAUhB0u8o24cNsp5fQrBBuosyju3f//Y+vEPiCaxKMEofJIQKRGhIhBgBFvf4prF0Fk3oiQL2E8ENESrUrhXCmAKuQNSqk4hXMTCJgZstQK1HbHO6lL4fRd33zwqILGFYmgqJ0mGa4WrrXc//LSt8VelvRyntRJfIaWTZWobWZgsuQgoiUSJufq5KSipICxIYUoLBc/H/COGG89cpqghk7IechPjxcjdXIkiE1gIcyGRFBHcVMbTQDVYUqSzAmERG4Xt9geBUiYqhnkMJAVYWICWoZcULDLp8edX7fx0WKfZKEyRIRqHS0zPTj3P38UP60pg8lPXjrljmygr0ja30n1Q6RNVBi503uoLB19tmOsnEi5fDZsMQssRHDzPCfedkXr0exH8YpstLMV5KXxjsl9r2O2e9HCkdEqqqAMiAKQ6IE5XraCMyk5AKeYGYN8V7qsAhWAhtVZdS+p6pK1rjOoHV+2Pq+i6cWe/CxgkSFWJXWK7ybVK9m1V8yvfJm4UmXLv7zL9OPd/AewzaeneLlWdztcuX4fup+el9mjol44027gw3Rh5kS6w+G0fEoOh5FQM4AIL/Nhn/jYgVlJX8c45d31fW4Kir0u3hxnqTtfkR5YygIgRXiGQ1IU1VmGFILZnICp+pJQYAwGFAhVagKlAyUDXtB+DZ7mH510PpuYC9iHLBPACYipcJjlePyPv/zSn/N6aMzU7Auc3537/76AZ9uYRkvTuAEZJgIzvPDovzrG8xLUREhqIL+xrBjg/1ueX5SfvskPtkzrZT4f+dWOwiKS0+zFd5elj9f4nKMyqHfwdoVeT61taUeT5Gifh+BtUhjOhxGe33TTiLxOaEGH2EWw5oFK4RIRQAisgx70vn7UfRNSscsrZC/mLnCLNP3U/fjg/u3km+VlmDvNJqt5Mf363e3mM3RayFN0GubdkIMcYKspJspxitU8iUUtfPeAD5EuJ4gL0obDU6iKma3i0uDXQxokyh21rNd57ib6ZtL/TTGwwJekXssc3y8zrYApM6X9Wdp4rthdBP95qL89lnv+TEzVVBRVTYQEQIZbpC6gXgYUEAydi/+KsYRS4vEKimoKDTPcflQvBoXP1T2SsycSMlEqzXfTMs3H3VVwCbodXFxGh2ObGRDTPCGfRKjqzUm3tqFAQ3JBwqIR+5QeFw/oPoBe4Osm5j9ngHks4C1MRM1JhOwEx4v8P4me3+LZRGgIEoH77HKAIAERJDH7qwEKIRAggh4mIFpcTzs9RJmkKr6ugxSgA3DC6kCJASODHuojTAykkIMSEDieV3hZlb8uJSfS3MpvCZWkDqNriflx5tiPENZYa+Li2Mc7dtOyxMUQBrJyZ79p7+rMkcqRA3MVa1hVQiNApMVuBq7j3dYLPGwws2Df3aIvb4llJtYtutNG5MJ2IuZrvD+pvz1UuZrAOi1EdsanW2ME1BB+CACELwgdyhKlB4eWOZYlygrpTQUjDACVaiqqADMpKGSCRHPANZqhzQGQckp8lLuVvp26X7N6FLMgo0nhqhd5XQ9rj7eYpHBWhz08fzM7vdMK3KAAxBZs9e333+VVhKpkioFrADUqZeIIAqK5mtJ09XDajVfayGYryTLCYg2dqHHZmouFrVZFV2O3Zvr6tMdSo9BF0cDHAzYmAAI6iWmO1ZTwKtd5nT74McL8QIG2i0kMbbFO9VJUERqEFq/u4I11NIWGtWLmqqSHtb+46z8OddPHnO2nhlCXFTmflq+u3HXE6ig38L5EX73rN9pZUxCATSzppZdaoqKKx9SdHgRMWggKBNAaRL3uxTFuaqDwIt6UYAbDKH6aKSNmcCVRA/r5C9vl28uMV8iMrg4xt+/SL+9GFhTMcmm/BMCSe3Ugjirog/3/l9/WqzzpS+RWjw7wflB1GsbJtVQhQM1C0FgZhFhCtMjAQlaETA7QCpaZO7j0r9fywdnH4gqYoDVKy8z+nibjWfIS0SMF0/w1dOo3/ExhzGoAbHyqixvbrOPd7pcwTf8imo9dWHClVBWeFhhPodoqGC4CST1CvpSSc1OopuJe/W++vUDpkvEMU5G+Oosen6Mg87SULlBbQoGJABrgCvV+WI9GWd3d64o0Y5weoA/vIjPDqLYuN3H1Y5fvyqF8oM0IHi1gIDUYVXq3ULfruR1gYlSzkbBpIq84vGCP93KZAER7Hfx/LR1ss+RcWUlCECS1FoqnP00cX95j9sHuFAL/3bMBBFUHvMMXhEcL9iUiYIrejReHv5HyauZre276/UPb9zVFN5j1MPLM7w44sMht6KKgIDhVQNyEhgWoBLkJX28q95eufEMAhwM8c05Ls6iYc8bEkARAikxEVCjp1ASIiQjImIiSwxPa4eHlf+0rN6v9crRwhivpAQSjldr3Ezcuyssl4gjPD3Gs+P2Xp8rX04XWpYE8a2Yhx3jHS3XuJvg0/2XS7jgVkIgbqqYxpoMBST8kdlBTwKrZCppfbx3f33nfvmAzGPYxuEevXw2Oto3SeJc/TXRDkcBAB7RqqKrCX7+kL+7QlZh2MXZqf32xcGwL8bmXj3IgES1zkt1qGImooCt2JB4qKp1WgqWOa6mxS+F3qhdGVYihXonUSV8Pc5ff6rGC3jFyRDfv4z3e1pVcjMu/+eP2f0EEeP5Cf74wrRarXaCoyGIgquE0h3Wwgu8hzVQwClKj2WBVVYPbOP2m2tjZ4WZZfbDffkvP63e3KJQENBu06DXTdL2siicWKpj7taLhQDlSs39TP7l1fj1FRYFrMHBXjwatMmYh4WsjCWmxFCSaMQVoyQoGWLmwNA02bM2mVValzJe+Hcr/0HsFFQQg0IJ63mR8dV99f4WqxL9Do5GfHY4SCIzXZS/fMh+/oDpAsM2zk/AHLUTc34Up2m1yok4JiIRgai1VqDe+8hYL5o7Gi/0xw9ZUQACAZSYwM1a3EIqr9Ei54/37ofXxZtLTJZwCgLySu9n2Q+/FhGXtIMJPrsqMYuMXn/CwxKlhzVYZe7qZlHky8gIVCwjjnAwpMNRfDSMYuMYytzQRVAiDlwOEazwLHOfVv6toztBFjhlYmJiT/ZuppcTTOYQxaCDvUE7jtN14T+N8eN73M9hDUZ9nB51W22kqXz1pPP8CUEtkRF4AKShPAICHwCzLPTNtbufVpOpUw9V8o4qIQNWEHFtLK+mkuhuJj999P/+K26XyKvw+pjMMZ+7n959IRRSs8wVEPIKaFhXDBFc3cvt/dZhmRAxnp3pd8/L+Lv+MNUkFqgPhG34x7kQiWELvV5U79b+Wu2arRCBmKgmXPT95eJmjKwEGTjBZJb/8NOtE/k0dtdjOI+9Pk6PKEmjdSnltAI8SDgEHBIiCliqTkzKyna59ss1V5UPI8tLmq75dkYtg1ZskkQNCQAR5IX7dFl++ITxApWDNJHOEKyBYSDUwA1JF8wkCieoFAAMwTAiakKB1vcHi4siF3y8B5H2ktk35+me5Yj9NmAFlosIgF26j7leeVqQ9UQ1naiqAHnhRYashFOo4GGF0rubiXOKZYFlgVaMw5EZ9NPZLPt047PCAVAwBb6jJicfXUpcOZquabZSUTjG3dy9eq/TVXXYdU8OoycHbC0rhSqFkhidNnptcAmqUAoYGHWx18egBRN4VEUlUIUBPGG+xmSOaQZV9Fo43uNuJMY01VzzJk6QlZjMsC5wN8WHWxzv87DPUBfIv9BVIoWIArDL6qqgsXJJcADtJg8m34rQjtGJ4BRZhizDncIrwIgNBh0cjuywF19ePry/wf209nmo31kJ9QRugo8InGJdwCsATGYoVv72Fs+O0Uqrk1ECC1I20NjS8R4vK3XQmwfczuEyWOCgj6/PO0/3KOYKgABOfEgDlU8+Thw+ZvMcCgxb+P7FYK9dJdaLuM3IAORiJwt69csyK7HMcD/BukDzNcAGpCuIVJVspreOlsqVMYF8gHoNxGkaydfntqqcYawKeEHpsSpQCiBICE/2cX4UD7rR6xyTGe4eEJJtw3tveQBt2CKVrQWD+YoCvoAr0GtjlcFJ/eeG0SJ5epD0u3R2FP/b68y9LeZrkMF+D1+fJt+e2cSsRQRMqgZkVKmQdvQ+n8yyj/fwHr0Wvr3onfXz1OYggzo/sgCZiy4n9vZmOVmgLOE8vDQNEILq1mbMVkSspwWoJFIRCQUtBxsSJVafHFhrcHqkmUtXhb0e+7++X1Y5rMGgg2fHfDribkfOj+CA4bChOho/UlDmze3ELXOoIEmw16dhl7jh7epJA1LG2T72BjYyVMc4gOFSK6YNY6KPHbQs4EEGESMxeSfilLMGataDWjmk1kUc0H+4s2jbvBPnoT5lAMpCMJS0bRyburr2YRXVwWfLWYcMLiJWkYdlqQIyoeRxAa4a9oMOt1r2/NAW2r4ca1HmgcsNuOnJUXQ08ImRr0+x30NWNnC3sVShdla2/vnVvKrggIMefncRPz+kxOQktDtGw+in2B9qYn0I/0RQUogkltswiaXIghSBAjehRwWP0NepPUW4mQHWutokAOJZhaih7eu2kGywbrh/U/8FHqZ+OVIiAGI9lVBPUGNMuIGZSWGIAAdCahhGUrR+Xc8nk2K9hhd0B3h2xid7yaBVkcrT49aT40gpVUQAMxTwgM99dDWPX3+Y30yhikGHnj/Z/9OLpButLIBQSYEZFqgYuUFBqBRkAQ9Vr0zKopa8IaGaGAmeSAomRKGlrjUlzLLjYDXIIgYbgD0EsNtQpfa3lUTdKwm5qIkPxIg4skQ+tBdAoagWIjVUl1wB23hHk1VxeV/eT+GBVoyzfXx93u0n3mgFEoKpxKzy7G6+KkpNLA4GcTf1DM9NNHce44W+v3rYj83zY9tJRFUXhRlPs8pTOzYHfXQSiThUXqGgCBBQqUnVRFCGV3gylRojRgiblm9gZkTgA3QgeIUX9hI7FRVfd1QBAF6tqJXGoESBAwytSvKBNlJtumRqwcE6tSaAiLghaDYro6j4elLcTPRhBQBHe7g4wtODOI0yDlQdRbNl8fG++st7ZCWGLTw/K58d2SghhQ0kpAMWS7y/zDqEXtq1Q14V5c+XxYdrlA6DDr57Qmf7ZthlSzVHFKbXEIVVHXCQKNYFbqfSSSkm8juQB6Dc4X4hqwxeAEJR4fahQiWtKCSYbXLPvNw8+EUOLzCMyCKyZCChXWaI/GPgb0XdpoFJpLzVXGjoVztvpxl9vM2uH7DOETFenNqvnsSjthoVAEzkEN88ZP/2M/7/v6JwOOxjmrl2Sgd7jFrHAQEWBd7fwAKHB5ok0f20+P/+jLc3qBz2+wA0jdFrG0MOEN2G/Edv7BV3c/x85SZrGPi66UJ1PeCUbybVZAnnAWC6xqu3q08tjSMPqdvuwclLr/O1uV2g8mjH6LeQcmXYqPpAIxiC33B6qtaYZumRcpBfbJcyqdI697dT8/Ya8yXIYNjFyfF+t4+s9EwxKyL2MCYrZZFjXaIC1iXmS+SF975usYVLGIXgfoV3t8V+P1nmNF2hEOQeSYlVhnXppCH+/lZfRxTjOZbrLI0eEZvhOV6K0iMroQoRLNb48c1qk+Cwc79XlB55BsPY7+HiBIO2SQxZZq8awp8hhqooAFiieiV+Rshy/Y1mmeFu6m4mWOdQBhOmK//6yl/ZkuBakdtvY29IrTQ67BcHPWQeww72e2jHFLOCZDNmBQqPeY4PN+6rM29sdHaYVw6Zw7CNbhvthIl0UyRrQwfyhloDBCgriKByqFv9VINYQ0FGA2a0E4iAFZVDFQrGDXfcfCBCGuNoiK9OcXFs+x0fnh7a75u5IhUltk1bH7wzjU1Rz6qUl26+kMUSpQMsshK/vru/uqyVAQddvDxBq1UdDJJvn8liXWUlhl28fGL3+jaJLRe7oB9CyEpcjnE/L58dd//uG05olpUY9fHsmIYdY82WtKrNtKnn6giCbopeC60ElsAAM0oHANYihHNjYKg2UPghEbwHW0DgBJEBEYjRMnhyhJdP4qdHcScpDfnNswPfaYg8ABW7eSfayXe1nkKhIFaYINsBnMfDCssMzDUAKU5wNAKAUUt7p/aoZ7xyHGkr5k5KjupiO1SwEUMZXrBc4+YuOx3Ff3ze/no/88JxRL2W7ySw8PR46VFNh9ZJihnPTvj7591nRzblAg04DAlyuxKp7nGGVgJCNctEAqEt1LJG24m0E3Ti0pCjpusmCDKlGtmB1G7MxA0hu6M2FKj02nyyz189qa7nWBUbOFPf2Y7RaSGxSKxPrSQReyUvxqnMM+/Il6FxBhhCJyVmKp1Wa72+x/3B6o/n6XBomBTkIqOkjvGIt6SdRnTd2iR0Ezkb0stDpGG+a+VU0HaIb5J4QBtB9qM7He0AlwK0jJhA3jAAp1sIURvBQxXEgIAsKZiZAVINeHf3MiT9Nj0/JF/iZoJ5HtSPCFncME73cTpAbCpViFLleV2aWc6ztS9KH7dgAosRmrctbaVRWcld4e7n+HDrbqfl+ZDTSAgCyGdxd1fsSA3jTorIIDXatpIaj6ZnpZCmqR6ag7VZghlVlYnDh42lNvKNoPyqnWV3+LWxwCDb2O+LsgABSSu2p3tm1O9llc0dVJiMVaFAP6URdeIKJItKskwmC381Xny800/XiGI8v6jOz7uB7rCMbkqHe3HlMZ8uF2t8uMGr1w/d3/fjGFFTWBBIgkLsb1xh1RMcwTA29MDnnJ6vv01088ugQAs8lQSmVCjMzwaO76j6ap0fguIFNkCM8Bv6DbwP75Qw4ljbcSVqAIJ6J+QFzlNe+ru1zpfV/cKPZ9XdXCdzTJfI1jgeoZLIK2+GnVg9HETGmMnt8kYwWeHf3+FgT2NLh50Y6gh1p/A/kDU8ej2Q1gP5gkGxq7RVNFJiAjRkyeYvtbbLjoEQvBHE0MCa2qZw+cKrUa0e4vB9luBEqwpFVeUlskpXuT4s3MPSjZd694DJHNN1TZgljEEXvZa1rGFNMcEAw44ZduzsGFmJ6RIfbvGXj6tOFKdPol7MBjk95v/o8fs0HQooBWGx1lzqjtLzyzZtKKBt6aPK/IiA/22rUZvYDW0qxg3I38h3SQOfHikZr5GDrRyvC8zWMn4oxvNyPK8mc0wWmK2wLlGUcA4E9DvY6+JoiG+e4ulRxJFuawBFJ9bTvviL6Pahmi4wz/DqjbQ473WG0R61rWEKnGz9ilRT6yHGNAOoUzQIRM1SbbAXbcoyAKxKRCJKtOXLQibcGD2kWtJQGDVT8pmSi9QG/ejmJ4xaH00E0WiR03iW3y+yZY7ZErMl5mssMywLrAtkJcqqbnAO2ui1sdfD6XH7cJgOu3zQi6I0mWfGh/a3BwERymE7Sc86N5NZVumbK0yW+PEjDE39N/H5nh2kQqiwycLh1bw3rBEDgAcyh1UVZ5LCGGzxw2NvQC2jYrCQbBwETdoKDrgJz0xQqQw5gtvowIOxDMhDbV2j77hSML5hVGKuZvLjO31zjXmOZYZljrJEWaHyIEZi0E7QTXHYx34fRwPsD0y/yzC8ysq7qeQikxWFKswSjIFhaVnpxfL9RVJV+XSBRY5PE6gisqVq8vLYdo0j2mrPQpJtRRxFYIVT3M3x109lJZyEvEoiYFU1oG3PXShAKiIBySZHsLKIMLNHzVyCVVWMSj/FQc8f9CKVkkKcC9ENisDXcJMfqXbJkIZs5XE/KX58g1dvUWj9U1YQI7ZoWewPcLqHswO6OOmd7cWDDlrGZ4V/dzP99bX7MMayROZxP4NzaCVoR0hNFTGnpvruaQugu2n24yUWa1zdo6UYpcWTvu101NKjBpUh3021n6BlkQmu77BYLn99t7Q7CySwz//ba3dlbXraDBjg5Sn+/jmO+i1lIa1Qd1ihBG6YrUcQwaDeFhAIcGZEEZjRitFuoRPjaIT9AY4G0V4/GrS5k0gr9qnNjPEGao0F06rE9RTjJQTwQGIwauH5EQ66lLCLUBmmr4+t/afB4N9nP39AluFoD8MeksgQPSpClYThzg/j3z8r7+d4fYesxMMKQT/1WV7fWOEzFf9nltpeXKPoWHG8XzcH+Ut5wdJOGKMg8Wq4QsvaafH5sdgIrbbptNBvcS/FqGdHbeq3qZ0gNj4mUak2TmAJrYj2eui3kTuAkMQYtXFxhG9Ok/0OIhKGZ2T9JHl5lFZf86At8wW+OsXJKEpiMvT55BHcMI1fHie5k067upphkaF0/5GU9JEhNqlgZ4fTpvOsBKOIGYMetduWIAj8KtUpMriV3WDf3UtVmTUy7rgnyQW+O0O7HfW6tp2YdkIGwnAGHvCsAojZAdcR+1GLXhyiqnDShwDdFo5HOD+kF8e2G5XUWIFRdZm+fxIf9WWxLA/63O9QyrK5YcOlGAIhf7oXd1rxXqd6d4u7B5SujvdfbLUD8IGobpJmLd8POGunQlKFISQWL4550AHBBzpBH1Nj9P/UqBMATK24V9Igh+HCsSpD2TDYeIYzBEbY3bJbkdVpgaACLpxd5jzNKHPMilZqOon0E22ZkFykqT9qi1ViRMQwLAdtv5hmqI8nkB3sqjLT3ASfImJm9t4rYaM4byq+rTlC37gJ8IFlprBTJ8BRhlrjRz3up2XbaN0ZZLiNM+4w8Duvg3ocDE2N1LvHmsKaa0nTFp5wvc9li5tSI1ELnZgFQgobSUTK5FkcExjkoZuuNwPMQW4WGNTtHLBupwFQkFpIFFPL4rAFJzXVWc+8crD+xkA1hUCfRfF69NsdSUqBerLGR+zCbhvV7QuEL9xaapfrCD7V4HiEXR5fjAiNmWAahMIQEIyRZLMvS6VuTDX3m7DnpS7rhWuGd8OXBCYNjEb6gdCIVMAZuBYb5Volhua5aKK4bF4N0IbaC2PYrKXdZbVj2abHpTWmbwg/Ut2wLtj5+nBH0EXzIxk8gbh+A20mBs3WQ+xkjHpbSt0Tg9Roj7fgu34cfZ5lQqEi299qsMiWON3UNNs/QYDXhohApvnP3Xs231wPkQLs9Jshb/oLKnUbDtvQpgrYTSxnbdyj4TFop0HklVStV3be1IITLdMIhtxGEf247GJPhiguQSAmeEZl4Dm8EoUJsgIjYCYAjuAZsjGl1pPVCERBAusROyIntqx3ImyUmbr5ECR0WjfOwypjaYIeKTfoQdhoZGBQQSvdITB2S+VNHvhtnNohZ3c3U8FOM75fYjxXJ9SO/KiD0yH1YvIIFKJuSiUCOZhlyQ9rP1uyQNup32vzXltj+BBSvfK6pIeMssolhjqp6SRIWA3hM+EYEQSkyqvKPGR0v8Qi94UiRAjmJopBiUzYNxTUKUJ1NOSayMQGfIQFnlgddWjU4X4aRewZbqPt8xqKQWwaghZNYU2/ofFQL1TyShXS97frv7xzP7yF9zjp4/tn2EtNNyIldgDBNFjPGVUle/eQv3qvP7xFUeLFGf74Av3zNDHqoR5JLtGnWfnD+2w8xaCNZ6d8fmBGLUotmcaz6ncAFNFakg+T8q8flq/e1ho77ISYL167EAF4hOA9YBmdFOdH+N0L8+KktdcO0g1hAlQt/6bfFwS3u3FqdysHAAGXwvdL+eXKvfqID2OkEZ7s4ejQthIL9bmnLK+csiox+W7Ldq1CzdrZ8bJ6M0ZWIungeWGcWoFWYuZl9Pq6/OFD9m+vsVhj1Mb9XCwkPjKJJdcshBpMKBXe/HhV/M9fyz+/xqIAMyJbK8e2L4rPZ7pWt23A1G57Bsg8FktM1lhWPiuLP71I+jEbFoL6wLNsUi5BN6vP7LA/nz9Ozbo0n8blh3vcTLGusD/E0QGO97qpLVR1XdD7Gx2vitIhMnj5JH0ygI0i713mqlmBdYF5gUzjSlvLku5X/sN98cPH/KdPeHcPInRbMDGs5cgQg8zjKft6AAAYNklEQVQWf4BgnOq6Mm+usx8/4fIB3QEGfdttW6aG622CVC2Uq3doK1HYzS4hh9YyO6ojeu5otZbJpHx3i05aPTu0aV9bMX8G4zaIwW4S36abxqEXoqogKJfePqzN26vs6gGrHKnBizN8exad9CgCKm/yEr9e4edrTNZIGBVJN45GEYNNGHFoxpWSLF26XLpfb+TPr/M317hfQBVHPbw8xh8vzNnIdGOxdVkafIQAeKFVrh9uMV4ABnuj7sVxa7+XMHndSHzD/UHR1IBMAAwjqmFbfL0FWjlk5FVF91O3XN7N17h5wHTh9lqURkBTaYdQBQ28Z6hmHnvTjsoDXs0ix+XE/3qJ8RzG4riP7y4650cUUc7qjImiiJO0WDl8GoMJB5/Kk07V7w8EVf2FjMzhfkn/+mZ5ffvw8yWup1jmMIz9Dv7hG/zpWfrNSTRKq4RcsO52fxDghPOK1g65hyhm89VHt5w0Q9oVDj+qkGlneRKArQJeBMwoPFYlFSVAKD2KCl7qXaON3KX5ntAHaB4SuK8dIThBwJWa8ax6cy2XE+QV9vr4wws8PzCjtlp4JhCkHdHxXtRpVUTIKlxOcPWg56UNmzXDaB8yvHq//pUxnWGywjpHv4Wn+/jjOX5/Hl0M5SB1CXsOPcwNLK8F7SqA91BFpZiuNMu2cthHK+Vv8Aeba5eZ8YpStfSwjMrDS2igBmChRFsmPuQ6G/6+7hSGRdeEPVGTVfbqIXt7hckSatDv4/n5QbtFlfilD0SicWS7vfawv2y1srXHdIXLCR5WWgqY61btwxzzRRFymjEYtfDiBH/6KvrHr3uHraptCkulhSIAKlVuyN7GbM0MKwzDGsSNdoGa8eAxENh8DgXwZz+HolKIoGwmRFWZPzfzRpQEhd2sPEKtGTY1kmWvdrKmd3f4cIdC0Guj1Wp507qarR7mwmoAEBkBrTUySavbLcYrWWS4meHTXWbZhFKMCE4ggBH0Exzv4fcX+NPz9MVRfNhyVnNDgnoPfj1hwTksCCCGWkOGwEArxu++2r84jPe7huB29VCfWareaN209rAp4+ti0KxKXD24v/x8m5WICDErh26iNrajYBOoQmiz+ppKZ7eL5bzOVuVsiVUBTyhKXN1m//1fP9gQ3pq/AuAYD3M8LCECD+QFFlnZbZnNlycRBi2c9HBxyM+O7FfH0dO+DtM8gYBcc9fuRc3bSszUibHfw6CN8RzTh0mPLVXGsDRAAup80EWHBKdMltipkChZAy8earBZ0gq2y0Jnc/gS3QgHPQx7cWR96FCE4mlTr4VXsbQDET5v9gHwzigSg4rgBLczjKcwmzC5w5DVYLGWbMGGCruBZMMUXx/jTxf2q0NzMor3Ohyh4KCdCyeSbMGO1seDgDwUqhFjkOKbYzwskRWYzNS56npaGbNTQgRBq2nIuXpNiHqYqMbs3JBZojBG81LyAkQ4GeLiCKMuJcbX2wIbD91ASyKy3Ow7rGdH0Oxb1Ih12I1O993JBLcL+LrjUZsGv+H/gqH3O3gywvEoKSvfFFjY7+MPX43+6Zv2QbqKkBOqTeO6PrqliUrYeQoRlNSAOhF/92w/p6Wn4v091kvMZlsv3HZSqdn5D7BK/ZmEG/QT/vUKIiFCEuF4hN9dRN88bY36HEmOR3V+3VIVgAKXsPGx7XABAMZUh734D8+o09bxAk4CEUEbG7GCeBsIICBg1MbzfTzdo8uJN4E1IUSMViRt6xK4kIIIupkTIjCa9okKwheSGpCCHAiQbqJfnbajNHkyzlc5nN/pP+1MmFKQO9WV8LZf+vjnABiaRHwwsE9H5qBP5EuqCa5H3mAocBWwn7U0NtogVTWQXuwuDuNel5c55d44jZzTzVEaQXwFgFQMk2WJjevG7rClacvfGWeaaqt0WKzdoghnACWAQML+ANJ61zIBEpFadgkRyHNTSxUO06K8nJcPuXE+jiKbwnoJL6G0jeiCnXODdi7ZsVr9GaJsNGIC8WxdAs53ZNil1DLoc6oVABM9YvK2LEVjrIi1nyBNbIn2rIhXpV1mbsNuNiUUGJIm3EsxSn2KVQuFh0usRmEfkGKW4d3E/zThQZoSkapXEWa2lp1zGg68IOnFspdgkPiolk6oEi8LfXdT/ffXerVAJpkHmGKvWq+mZtoABEn+hk3dxBlW3q7B5nMzBGegB2388QLfPolsjxptTvOVoZsOtXUKDGkmEKPNomcmhTrFfF29vb755QpXE6zXdXXyyORAO8FBHy+f4Nuz9lmfiaSb0LCNQQvrCrMlXr3Jr68vY1OjkPCade9DaqH9t2f4r8/RfhLFVkG1GrHyusz1eowPY6yrwBmVf6vL0Axv5xF/486AkghgIO/jtI/8SIgioNqlm8J2WwXsZ6zm9hEEAnlE90v8ckv//BPe32KyQF42qoHdNyKkFv02Ps2xdt4/kbO9ZJjS+T59e6aFw2SN2ynupw1n+uhJgCIC2hb7I3iAyRKU4QhkoYnVXgunIyij8FDA73ApwKOC5j9/1StUwMBBF4Mu0ogplI5fut9uaswNj04N96mg0vP1JPvzG/2XX5CVAMFu91jUlgqPzBXrGe4ewFx0DA6H7TTWZ0fdldN1sbT3mGXwQcLzm9clRcTod7A/wLDfCjjT1DjGd2PzdN8WkGdlXEiSeyrFuP/saUxfvkJYVFWDKmE3TP2TPW2naqEEkq1coemmaM3k1blRtcbHqN/fFs5cjfXNFVYl0gR7PZyOEDGI6iZKMJcD7qa4fcAyw6d7vOvj6yf+qOMHLf7+Iu226M1tfnlfeQe/w6gJbZ8UMUYtfHdi9toakVP4AK8N0Db+qGvTVuduzddLvlnIalXlpX5xKfzmekR17l6GkVrsDexRPzruoptmKZdMvzkxpYHs4byELUrYpZO9UuFpkWO+RuVx1MZXT9t/fNZPbWFIQjEJQKCFtn76sK78fJ5hWWCaYVFQJwKjWmSeWc72opOhSQzvLj0P9oidKhGl7HpRedhBNxILD6jUzRthoogoX+VXd/mPl3L5gGWGYoPPN/+G999g4JCjNi78mzsNIY7w0IOcUYuSQcoGPkR92o10zWVrWp/ConskG1TV0lPhUTmootvC0SB9ftJpMzFvgSIRraU1X7lPt/RW1Qkqh6yyD5kuV9X7icudHA+Ti6PuWVfb7APoEZiVp0kRrStEhE6c9GPb5jyF3w07SqyglefX9+6fX8uf3yBzMIDlejMWGp8J9IgTZB7rEipIYnQsNrL9ut/n65MunIdTfLzDolBFOep0opTJfFHFGSzVkOXBm3mnrye1JiYQIcgrjKerX9+5lDPUx8sBACsKtG/HZVYqMUBBtRFNlvmbT0UIcN89XXdt/qLdanHO0ArGoTNfur+8v78eI7F4eoCvj03SU7KE0BCsXYEqxbLCT5/yny5xt8LZ0/b5UXevl4Ak7HJuOqAMoVWBj+P1p+vJao3jk+7zs/6wU0sVd0bNAC8zdzcrPn6cfByjk8iLY9ey6BraFDGbdVdbarPxWBsuKfQ4oY/OMBDgbonyY3H1UBootjsAwApPi0WG6XL7OkrsxC5LXC+xzLG/wjInkOUadrd+nfh/fbv+Hz9hmqEb4WGJXuoHiSFreBvBoIAXWha4nWOeh+CqriqKvAIp60ZDKEJMHmXF3uXEIEDEuWpd5LXmqdHUcXg/X0HFe8WqwGyF+dofdLmd7ECtOr817LA27YYQsDjwJDv231Q5ywzrHOPx4+xV82cqCk/NlntAwQJTCtYeqwq5R6G2Uq4QLyu9z/hf3i3/+bX85RJecdJF3q+fRQG+8yaqqBPKC10XyFzY0JVd+2yRPGqIo+nThAMQ8yLsD8iv7/KpfXRP08FH6bEobVmBCGuHrFKvgPJno6tHzxyObgrPbFqhDSvaHKOz8RNA4Rw+b8gJQOEUnG2H+pEpEXKrcZTMlT+t8W9vlv/vK/fmFqVHYnA8wPcv8OKoM2pXDLfRhWttcRIlp1Cgcrga4062UeJxxY9Qa4WO5u0Y4/HnvOjmflEIOQCddtAR1wdKhISgDaEcKuSA0bc+smU7f8uyCg5HON5LD7rGaKkcOrP1XZ7sZO6vH4rb2cY60uwrESEUwNIl7+eYTpavPhWv3uPjFE7RSfC7J/g/X/Lfv+j1koLhPks7BGEwG1gCE4zB3iDut7gVU63G3JB2gAic8Dzzi2VZVBiN4lHHxBa7MqMGCHLlKSvwMF8bCqcJKEhDAmm4Imz62SpkVUl8fTROsFTdE1aqT/tSADCK/Q6+OebvnyQJuaAdYpggMKvQenW59h73863IdAMjFFgVeD+RzPmrm+LNNa4mIIODLr7axz9+jb87t0+7PoHj7fLdXhFrO0K7jcjClhh0+MmeGbUY5HaI/wCEKK/4ciK+gJQYtOjiIOokbrcuaPbEcFbSeEX5GiDEEZIIlrmGCI+QBUjZkLEiW5avdqtmpjYQXBUiiC2NBt2np/02twBhok2GKrlzn0ft21L9Fjural27MqZr/Ph+9tcKsyVWOazFQRu/f4L/9m37+yfxYatMsDJ13+PRRSoR225Ch20MY6xXMFrGppO2YoL5bGUJSEitFSIYA2ZYy51Wm9R99rUC8iRmXRmgFWGvhX7LxFY47IXaAgBmJWhE0rYIm50Zu0v+Mwl8UJCMl/rjx7mriohyg81hLQDgeP3mJr+b+i+GQxDmGfIC6hEz9vs4G+L7M3x/kXx3YkdJnsB90UwIZCOkH+kfL+JVURYl7u9lNl3ENtixmZXmuU6wdshKeODyrnh4KBL7G9EhQxVO4BVWcbGHr09x0OWWdQxRbHbfKAmTRIaGCZ9aIvKqVqkOWEFOG3b/bmaAIMBsjbdX+cNDvlHsboo/T8UiwzSrEeDm1bcATQBg0MLJEE/38OLIfHMUnY/oMK1iFKT4Ysmvzc8TIy+OupkvYLPLmYRjLup32Kk9VZFXcAUKh8ohjtHtoNV4/i4+UsAwkhh7HXx7Gr04jbstYrNV4hIRlAhxRMOEjhLz1Ab2UbyiPhA46AehqnWjsFbyY5UjK3HTbN1BowrUOgmgpjC+lPtaFoddfHuMb0/w4jh5sheNUrRNZTatbf0SPxJULiAPbcX0/KiddtLbuVvmrnA7Kp9mOlV4kePdbfX+uvAOe33z3dN0r0MECSdWOxFVVQJBjOF2bPb6yVGf9tpCVMnOO3hV1oi0a3Ga8HmCMyuEcIh4wJ7MpKISArwolDfH8FiGNbAMbsCLQd3hCTyMUxQ7dgzEmZCox8E+/svL9v/13eC0nfWjshs7q5WpzfvFMmtjK86EpoV8GE/HGa29FUpsFHEUf3a6sYdCTaVkopxMASBJklar02qpuLrejkMsExdZVhURt1wVVVYuU9nvY9TjVswM7xXQmLRjMUr5xOohoWedF8PETKQqsn24VxVQfYapghTHA1wc08WetVoZrhNlXUNR/HHsXt/K+/vPqSIFoOjEOB7w04Huxz6GZ/gNC6TYrWIfRSsCPGhV8tu78n/8oh/nyJxTkzcyOfr8QeDC0cNCFgWc4nZSOOfaVoJGoWFaQiddN+MywEEXvz/H785NGhtAWIk0NTKKzZnRA8MDaGRF6rMUBGCBALv1vvdepaYl9wf4w7PBP37db/OaSAXshYkMM+ea/uvrxSy/e38rWmu0BCTUIC5imLAvXLXSkA+aERIYJOKIyJAY8qzayMdIyebOTVf66R5v75FX8HUHqTYOUb3NGICqeCD3teZ3vvDF2ls0zDptTUp1xwUAjKIY4HSArFInZMhCLWvH6kFMhxFGpG2ALZRVIaSWmYLFib2KoUe+zYqE0bbVMC46nCmoFLP2tvIQeOFUfC1rYIAVTGLqU2xAhNLhITO3a1tE1jTnRaiGHgAMQdUz+ZZF15SpUYUPyEVAkU36PX5yXEYtFK5e6Z95bgCDQsgdT1b6sNSywKiLoz7aCTZ8yZaj1W1gZGDYxmjIcdICwYux0k7pMLUnMQ4JqSopyAoxpGlrEhkJ+gXWENJ3PdzDqLPIYxS509lSfvygD0tUipLuP4z9/QSsaMXopugl8FaHLXQTrCtMlvjru1mVLbvGBwxSFwNSuzADMeH8EF8f0GHPJkyO1IkZr8qrdTQvo8Ew5jZXQsxxfeZWfdRtLdtVVeexduzH2TqfuwrdbufosD3sWXgn6onC/2sHoZbraTgmQNW3rBSQ60kpJR10e6k5TvgkokPSDjRSsDJZH5afQqFxXZHCGALos4rGA74+NYRLkWlh/v3SvR0jK+DIr0rkGazBYR+nQ+y1nHg9HeD8AJnDOsdPN7ia+YgRtvlzA2g3lupF+C+Kwy7vdSFgr1i66PV4/fMDbpZwSB2icKApCVSVrBEREmUmoXDKMnKHwqEKB8A5rEsyGURRH+yzUePWwrPQrORF6R/y6nri1vvxsHUaRc9iOjI0gqYCIwSot+EIZ2s4zJDs6l1ECZ6BCLB1ieNENZw665VmS1zfY7qCB4xBwhi28N0ZvTyLRi1hUHmY/sMLt1q7D2PMFliEqlBAv0ESMWMvweqk2a0CFUHu9N0l/uWNf3frlXIJp2Q3tQkznGyPefDhtwalRykgwf3tajVZEeqztR+pX0wtzQiC6qCs7lvEX1f/x1fnMZ8ZDCAJ1AKqWikXVgTW1ighqOFIQaJkiSAx43CAb06wHOLpIQYdEJzCR4ZGbfPyFGwxy6FAYjBs49khvjlLLvY4RUFwxz36h4u4F7tfbnE7xaqEYNud+8xS4ZCKYdtaCjtXKCKMenhyAI6gzSCp6eht9M870vu6NNdmMjZtlI00Njw8CCS9wBiIIJwi9HS0983p14Po3GiPKCZlqf/fjcqSJqE3E/rQ7EQsI2KGqHeq5NMIF0ccx1JW2OvR0dBa4wOJ3Evxhws+3tN1RcxsSQcpTkfRXof7sVj1INeNrR2aTpycDP5XWde23LYNRM9ZgJIVt46TOJd20ubX+2F9y22SjCeeypZtErunDwtQSsJHjiQS1ILAnssuru+Wh6U0/AyD5FERF7t4+2x6ukVhGFSMuxrvXmLa8fu9gNpT0l9r6gOOrBjVV6HoNHfKgvJJKaMqFY/VINElsKpVxVnVxZvLv949+/uJXVZslbU06E3zrOv98oH/3NAKzFgLS2AiKkEDPEgWq7LiKGZWCcMyYTEkH1ukrVDzvquxQsBc4AYZ2sDEasBSpA+UVEMAR619HkYV+cRmWKxD6QwUR50xBcov3bKOxxEhHe4bR+STio7mGsZuuZMRNEkuekz0c9PVhLdPplc7XmxwRkDBgDsfGr/v28fr5d+aniFJbQnSmgFyC1qhgeGzATvr1PJqTCFgjNrdMEGo6GhzQW5VsgGQ5g1JPEiovRNGrrMGdK8ME7IDoF5ALwdV5AU+8XGcOdKZMcCPrK+TNZgihUwdAxlplkHBkXIJic85iUmYiE0tTya72PBp0c6GoEzWXI8zbg7t4375MMf3zowyKMgpAZLVTGUMRlOoDXtvtZ56BFnABhlSIcJxM2Oc7PlNAQIq2aUDPY6GuOoEtFg7Hiln04ndqX/gBDGwBGjZMvWHbNQ/wPrFrlzJP6F7h1bzUZghtqbnha+2/GPDl4XPoC1QQ6Kp6X7BzcE/7f3DIb7McVsVFsiWD4n6QWBTVFAeGzOJ3sIKzOACjSlTSZVbQBEoYydXxoCYOrFBYTgiU4lR6LBjFaMb1Q9TCT/s4qBAZxASc1C/Oob5aCgNmUE3EA5FxtoJA5gbYY8J2hGXRa8m/rm116YL823QQgpG6H7RzW37eOefDvH1UXuXV4nRQANEuskkKGuFF1iARiEYrlxTQ7BCT4jdso4MIwfSV5Z1mF2rvOpKy+rjOilpy66WG7nGyfuro/LpLRznx0pnow3XuNYR+z093WvmARAIFcXG4px4MdnrbXmz4QvTuWnyEYvBedbNnX+6jfeH+Db7ncNF1J48CoBJkkOWDScYlMtdKqKBSLq+mDcnWQwpzekIMi3RQmMGQU6Ert5OTFojFjig+hWPXhmEE4H1cCj22ccjDaHOhUS3CkqQn4Bi40ErOr9jQEFMiLOKy2rPDS8qryZcGc4tSqrvAt54v2h/u3y+88+H+PYQ/zV5Flety+ylrkI1STL1ylMSF6YozZKgMqEpI1pUtjNEJ94jQBN9FdOXURJe3ZiJXt0aWF8hWJkSHsfYX15EgfxEl//TrEwbchsY9voS8/5D2ROCnvKG2Fn8bno+2euNXVEXhb8RZxYlO44RDDw86vo2vtz6+0N8nWPvap7dQlr5H6ly+5L750AeAAAAAElFTkSuQmCC');
    const md = Math.round(mask.getWidth() / 2);
    const region = [0, 0, device.width, Math.floor(device.height / 4 * 3)];
    let total_point_y_diff = 0;
    let total_start_diff = 0;
    console.log(`md : ${md}, region : ${JSON.stringify(region)}`);
    let last_start = 0;
    let last_points = [];
    let menu_bounds = [];
    const default_alive_y = Math.floor(device.height * 0.12);
    
    function read_mask(fn) {
        const origin = images.fromBase64(fn);
        if(device.width == 1080) {
            return origin;
        }
        const sw = origin.getWidth();
        const w = Math.round(sw / 1080 * device.width);
        return images.resize(origin, [w, w], 'CUBIC');
    }

    function click_rain_match() {
        let start = Date.now();
        let img = captureScreen();
        let result = images.matchTemplate(img, mask, { threshold: 0.5, max: 10, region: region });
        let points = result.matches.map(m => [Number(m.point.x) + md, Number(m.point.y) + md]);
        let start_diff = start - last_start;
        if(start_diff < 2000) {
            debug_print(`--> ${points.length}, ${start_diff}`);
            let same_point_y_diff = get_same_point_y_diff(last_points, points);
            if(same_point_y_diff > 0) {
                click_match_points(same_point_y_diff, start_diff, points, start);
            } else {
                init_menu_bounds();
            }
        }
        last_start = start;
        last_points = points;
    }

    function init_menu_bounds() {
        if( menu_bounds.length === 0) {
            let navs = idContains('h5_nav_').find();
            let nav_back = navs.filter(x => x.id().endsWith('h5_nav_back'));
            let nav_options = navs.filter(x => x.id().endsWith('h5_nav_options'));
            if(nav_back.length > 0 && nav_options.length > 0) {
                let back_bounds = nav_back[0].bounds();
                let options_bounds = nav_options[0].bounds();
                menu_bounds = [back_bounds, options_bounds];
                console.log('menu_bounds', JSON.stringify(menu_bounds));
            }
        }
    }

    function click_match_points(same_point_y_diff, start_diff, points, start) {
        let _downPxPerMillSec = same_point_y_diff / start_diff;
        total_point_y_diff += same_point_y_diff;
        total_start_diff += start_diff;
        let downPxPerMillSec = total_point_y_diff / total_start_diff;
        debug_print(`----> ${same_point_y_diff}, ${_downPxPerMillSec}, ${downPxPerMillSec}`);
        for (let m of points) {
            let add = Math.floor((Date.now() - start) * downPxPerMillSec);
            let x = m[0];
            let y = m[1] + add + md;
            debug_print(`${x}, ${y}`);
            safe_press(x, y);
        }
    }

    function safe_press(x, y) {
        if(menu_bounds.length === 0) {
            if(y > default_alive_y) {
                press(x, y, 20);
            }
        } else {
            if(!menu_bounds.some(b => in_bound(b, x, y))) {
                press(x, y, 20);
            }
        }
    }

    function in_bound(b, x, y) {
        return x >= b.left && x <= b.right && y >= b.top && y <= b.bottom;
    }

    function debug_print(text) {
        if(debug) {
            console.log(text);
        }
    }

    function get_same_point_y_diff(p1, p2) {
        let diff = 0
        for(let x1 of p1) {
            for(let x2 of p2) {
                if((x1[0] == x2[0]) && (x1[1] < x2[1])) {
                    let temp = x2[1] - x1[1];
                    if(temp > diff) {
                        diff = temp;
                    }
                }
            }
        }
        return diff;
    }

    function request_screen_capture() {
        if (globalThis.can_capture_screen) { return; }
        let th = threads.start(() => {
            let ct = text('立即开始').findOne(10000);
            if (!(ct && ct.click())) {
                console.log('CAN NOT FIND [立即开始]');
            }
        });
        let r = requestScreenCapture();
        if (th.isAlive()) { th.interrupt(); }
        sleep(2000);
        globalThis.can_capture_screen = r;
        return r;
    }
    
    function init() {
        request_screen_capture();
        toast('准备完毕');
    }
    
    function run() {
        init();
        while(running) {
            click_rain_match();
            if(currentPackage() !== 'com.eg.android.AlipayGphone') {
                running = false;
            }
        }
        toast('能量雨脚本结束');
    }

    return run();
}

energy_rain();
