+++
author = "Ali Osman Seyyidoglu"  
title = "Statistics for Machine Learning"  
date = "2025-02-20"  
description = "Descriptive statistics, inferential statistics, predictions, errors"  
draft = true  
tags = ["statistics","probability","machine learning","artificial intelligence"]
+++

# Statistics in Machine Learning

Statistics help us to learn more about a population (larger group) by analysing samples (smaller groups which is part of the larger group). While doing so, we make predictions and assumptions. For example, we can estimate a house price by statistically analysing a selected group of houses within the entire city.

Selecting a small group from population is called sampling. We want to understand that our sample is good enough to represent the population before moving any further. To do so, we use **Descriptive Statistics** – to describe our sample data. This includes mean, median, mode, variance and standard deviation.

By using this sample, we can draw a conclusion about the population by using **Inferential Statistics** – making predictions about the unknown. To be as accurate as possible with our conclusions, we must assess how well our prediction is.

Difference between our predictions and reality is called **ERROR**, and we aim to minimise the error to make our predictions as accurate as possible. There are different ways to measure error. These are ?

## Data Types

There are quantifiable and non-quantifiable (categorical) data types. 

For example, weight and height are quantifiable, can be measured by numbers; while eye colour and birthplace are non-quantifiable (categorical), they are described by a **category word**. Colour and city names are just label words instead of numbers.

Quantifiable data can be discrete or continuous, meaning it can be represented by only integers or can assume any value between two numbers. For example, counting people in a room is discrete as a person is represented with only "1"; while a car's speed rate is continuous. Measuring a continuous data is limited by accuracy of the measurement instrument.

By asking a question: "is person's hair colour white?", we can transform our category into a binary values by using 1 and 0, representing yes and no respectively.

## Descriptive Statistics

### Mean

Arithmetic average of a data series, can be calculated as below:

```python
def mean_value(data_series):
	mean = SUM(data_series)/COUNT(data_series)
	return mean
```

### Median

Data that is in the middle of a ranked (ordered) series. Median in a data series can be calculated as below:

```python
def median_value(data_series):
	sorted_data = SORT(data_series,ascending)
	middle_index = (COUNT(sorted_data)+1)/2

	if not int(middle_index):
		lower_index = lower(middle_index)
		upper_index = lower(middle_index)
		
		mean = (sorted_data[upper_index]+sorted_data[lower_index])/2
		return mean

	if int(middle_index):
		mean = sorted_data[middle_index]
		return mean
```

### Mode

The most frequently observed data in a data series.

Mode is observed as the peak point in a frequency distribution diagram.

### Variance and Standard Deviation

Describes how spread out data series according to mean. To calculate Standard Deviation, we square-root variance to match the original measure units of the dataset. For example, if the dataset represents distance in kilometers, we want the standard deviation to be in units of kilometers and not kilometer-square. 

```python
def variance_value(data_series):
	squared_error_sum = 0
	for data in data_series:
		squared_error = (data - mean)**2 
		## squared to remove the sign
		squared_error_sum =+ squared_error
		variance = squared_error_sum / COUNT(data_series)
		return variance

def standard_deviation:
	return SQUARE_ROOT(variance)
```

## Inferential Statistics

When we estimate a characteristics about the population by using sample statistics, we are applying inferential statistics. Because inferential statistics is about estimating an unknown, there is always room for error. To express how confident we are in our estimation, we use confidence interval.

### Probability Distribution

### Hypothesis Testing

#### Testing with one sample

#### Comparing two samples

## References

1 https://docs.scipy.org/doc/scipy/tutorial/stats.html  
2 https://support.minitab.com/en-us/minitab/help-and-how-to/statistics/  

